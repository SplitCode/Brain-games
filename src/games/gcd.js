import readlineSync from 'readline-sync';

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const roundsCount = 3;

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  for (let i = 0; i < roundsCount; i += 1) {
    const [number1, number2] = [getRandomNumber(), getRandomNumber()];
    const getGcd = (num1, num2) => {
      let temp;
      if (num1 === num2) {
        temp = num1;
      } else if (num1 > num2) {
        temp = getGcd((num1 - num2), num2);
      } else if (num1 < num2) {
        temp = getGcd(num1, (num2 - num1));
      }
      return temp;
    };

    const expectedAnswer = getGcd(number1, number2).toString();

    const userAnswer = readlineSync.question(`Question: ${number1} ${number2}\nYour answer: `);

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gcdGame;
