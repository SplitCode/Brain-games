import getRandomNumber from '../utilities.js';
import logic from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const gamesRule = () => {
  const [number1, number2] = [getRandomNumber(0, 100), getRandomNumber(0, 100)];

  const getGcd = (num1, num2) => {
    let gcd;
    if (num1 === num2) {
      gcd = num1;
    } else if (num1 > num2) {
      gcd = getGcd((num1 - num2), num2);
    } else if (num1 < num2) {
      gcd = getGcd(num1, (num2 - num1));
    }
    return gcd;
  };

  const expectedAnswer = getGcd(number1, number2).toString();
  const questionGcd = `${number1} ${number2}`;
  return [questionGcd, expectedAnswer];
};

const gcdGame = () => {
  logic(question, gamesRule);
};

export default gcdGame;
