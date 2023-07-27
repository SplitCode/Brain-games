import { getRandomNumber, getRandomIndex } from '../utilities.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 100);
  const length = getRandomNumber(5, 10);
  const progression = getProgression(start, step, length);
  const hiddenIndex = getRandomIndex(progression);
  const expectedAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

const runProgressionGame = () => {
  run(description, getRound);
};

export default runProgressionGame;
