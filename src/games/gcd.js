import getRandomNumber from '../utilities.js';
import logic from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};

const gamesRule = () => {
  const [number1, number2] = [getRandomNumber(0, 100), getRandomNumber(0, 100)];
  const expectedAnswer = getGcd(number1, number2).toString();
  const questionGcd = `${number1} ${number2}`;
  return [questionGcd, expectedAnswer];
};

const gcdGame = () => {
  logic(question, gamesRule);
};

export default gcdGame;
