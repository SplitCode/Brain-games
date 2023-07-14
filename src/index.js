// общая логика для всех игр

import readlineSync from 'readline-sync';

// количество раундов в каждой игре
const roundsCount = 3;

// приветствие и получение имени пользователя
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// функция получения рандомного числа
const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

// функция получения имени пользователя
const getUserName = readlineSync.question('May I have your name? ');

// формирование ответа
const answer = () => {
  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
    return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export { getRandomNumber };
