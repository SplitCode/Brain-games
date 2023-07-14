import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber();
    const isEvenNumber = (num) => (num % 2 === 0 ? 'yes' : 'no');
    const expectedAnswer = isEvenNumber(number);

    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
