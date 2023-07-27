const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomIndex = (array) => Math.floor(Math.random() * (array.length));

export { getRandomNumber, getRandomIndex };
