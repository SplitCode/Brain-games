import getRandomNumber from '../utilities.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getRound = () => {
  const questionNumber = getRandomNumber();
  const expectedAnswer = isEvenNumber(questionNumber) ? 'yes' : 'no';
  return [questionNumber, expectedAnswer];
};

const runEvenGame = () => {
  run(description, getRound);
};

export default runEvenGame;
