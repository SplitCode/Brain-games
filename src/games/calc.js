import { getRandomNumber, getRandomIndex } from '../utilities.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const index = getRandomIndex(operators);
  const operator = operators[index];
  const expectedAnswer = String(calculate(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;

  return [question, expectedAnswer];
};

const runCalcGame = () => {
  run(description, getRound);
};

export default runCalcGame;
