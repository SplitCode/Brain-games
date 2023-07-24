import getRandomNumber from '../utilities.js';
import run from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

const getRound = () => {
  const [number1, number2] = [getRandomNumber(), getRandomNumber()];
  const operators = ['+', '-', '*'];
  const getRandomIndex = getRandomNumber(0, 2);
  const randomOperator = operators[getRandomIndex];

  const expectedAnswer = calculate(number1, number2, randomOperator).toString();
  const questionExpression = `${number1} ${randomOperator} ${number2}`;
  return [questionExpression, expectedAnswer];
};

const runCalcGame = () => {
  run(description, getRound);
};

export default runCalcGame;
