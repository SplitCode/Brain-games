import { getRandomNumber } from '../utilities.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const numberSqrt = Math.sqrt(number);

  for (let i = 2; i <= numberSqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

const runPrimeGame = () => {
  run(description, getRound);
};

export default runPrimeGame;
