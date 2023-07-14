import readlineSync from 'readline-sync';

const progressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const roundsCount = 3;
  const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

  const getRandomProgression = (firstProgressionNumber, step, progressionLength) => {
    const progression = [];
    progression[0] = firstProgressionNumber;
    for (let i = 1; i < progressionLength; i += 1) {
      progression[i] = progression[i - 1] + step;
    }
    return progression;
  };

  for (let i = 0; i < roundsCount; i += 1) {
    const firstProgressionNumber = getRandomNumber(0, 100);
    const progressionLength = getRandomNumber(5, 10);
    const step = getRandomNumber(1, 100);

    const progression = getRandomProgression(firstProgressionNumber, step, progressionLength);

    const getRandomIndex = getRandomNumber(0, progressionLength);
    const hiddenNumber = progression[getRandomIndex];
    progression[getRandomIndex] = '..';
    const questionProgression = progression.join(' ');

    const expectedAnswer = hiddenNumber.toString();

    const userAnswer = readlineSync.question(`Question: ${questionProgression}\nYour answer: `);

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
