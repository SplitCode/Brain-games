import getRandomNumber from '../utilities.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const getRound = () => {
  const firstProgrNumber = getRandomNumber();
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 100);
  const getRandomIndex = getRandomNumber(0, progressionLength - 1);

  const getRandomProgression = (firstNumber, step, length) => {
    const randomProgression = [];
    randomProgression[0] = firstNumber;
    for (let i = 1; i < length; i += 1) {
      randomProgression[i] = randomProgression[i - 1] + step;
    }
    return randomProgression;
  };

  const progression = getRandomProgression(firstProgrNumber, progressionStep, progressionLength);
  const hiddenNumber = progression[getRandomIndex];
  progression[getRandomIndex] = '..';
  const expectedAnswer = String(hiddenNumber);
  const questionProgression = progression.join(' ');

  return [questionProgression, expectedAnswer];
};

const runProgressionGame = () => {
  run(description, getRound);
};

export default runProgressionGame;
