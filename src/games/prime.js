import getRandomNumber from '../utilities.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let j = 2; j <= num / 2; j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const questionNumber = getRandomNumber();
  const expectedAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  return [questionNumber, expectedAnswer];
};

const runPrimeGame = () => {
  run(description, getRound);
};

export default runPrimeGame;
