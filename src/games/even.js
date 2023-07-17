import getRandomNumber from '../utilities.js';
import logic from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const gamesRule = () => {
  const number = getRandomNumber();
  const expectedAnswer = isEvenNumber(number) ? 'yes' : 'no';
  return [number, expectedAnswer];
};

const evenGame = () => {
  logic(question, gamesRule);
};

export default evenGame;
