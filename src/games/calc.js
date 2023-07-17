import getRandomNumber from '../utilities.js';
import logic from '../index.js';

const question = 'What is the result of the expression?';

const sum = (num1, num2) => num1 + num2;
const diff = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;

const expressione = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return sum(num1, num2);
    case '-':
      return diff(num1, num2);
    case '*':
      return mult(num1, num2);
    default:
      throw new Error('Unknown operator');
  }
};

const gamesRule = () => {
  const [number1, number2] = [getRandomNumber(), getRandomNumber()];
  const operators = ['+', '-', '*'];
  const getRandomIndex = getRandomNumber(0, 2);
  const randomOperator = operators[getRandomIndex];

  const expectedAnswer = expressione(number1, number2, randomOperator).toString();
  const questionExpression = `${number1} ${randomOperator} ${number2}`;
  return [questionExpression, expectedAnswer];
};

const calcGame = () => {
  logic(question, gamesRule);
};

export default calcGame;
