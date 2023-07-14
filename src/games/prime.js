import readlineSync from 'readline-sync';

const primeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const roundsCount = 3;

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber();

    const isPrime = (num) => {
      if (num < 2) {
        return 'no';
      }
      for (let j = 2; j <= num / 2; j += 1) {
        if (num % j === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    const expectedAnswer = isPrime(number);

    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default primeGame;
