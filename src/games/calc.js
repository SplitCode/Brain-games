import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const countRound = 3;

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const operators = ['+', '-', '*'];
  const getRandomIndex = () => Math.floor(Math.random() * operators.length);

  const sum = (num1, num2) => num1 + num2;
  const diff = (num1, num2) => num1 - num2;
  const mult = (num1, num2) => num1 * num2;

  for (let i = 0; i < countRound; i += 1) {
    const [num2, num1] = [getRandomNumber(), getRandomNumber()];
    const operator = operators[getRandomIndex()];

    const userAnswer = readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer: `);
    let expectedAnswer;

    switch (operator) {
      case '+':
        expectedAnswer = sum(num1, num2).toString();
        break;
      case '-':
        expectedAnswer = diff(num1, num2).toString();
        break;
      case '*':
        expectedAnswer = mult(num1, num2).toString();
        break;

      default:
        console.log('oh');
    }

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
