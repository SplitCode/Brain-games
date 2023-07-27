import { getRandomNumber } from '../utilities.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};

const getRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const expectedAnswer = String(getGcd(number1, number2));
  const question = `${number1} ${number2}`;

  return [question, expectedAnswer];
};

const runGcdGame = () => {
  run(description, getRound);
};

export default runGcdGame;
