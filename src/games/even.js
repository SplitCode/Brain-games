import { getRandomNumber } from '../utilities.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getRound = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const expectedAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

const runEvenGame = () => {
  run(description, getRound);
};

export default runEvenGame;
