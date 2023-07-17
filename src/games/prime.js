import getRandomNumber from '../utilities.js';
import logic from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamesRule = () => {
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

  const expectedAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, expectedAnswer];
};

const primeGame = () => {
  logic(question, gamesRule);
};

export default primeGame;
