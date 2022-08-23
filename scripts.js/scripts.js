const deleteBtn = document.getElementById('btn-delete-number');
const displayMessage = document.getElementById('display-message');
const displayGuessNumber = document.getElementById('display-guess-number-id');
const mainConatinerNumbers = document.querySelector('.main-container-numbers');
const inputNumber = document.getElementById('input-number');
const checkNumber = document.getElementById('btn-check-number');
const scoreText = document.getElementById('score-text');
const highScoreText = document.getElementById('high-score-text');
const tryAgainBtn = document.querySelectorAll('.btn-try-again');

const n1 = document.getElementById('n-1');
const n2 = document.getElementById('n-2');
const n3 = document.getElementById('n-3');
const n4 = document.getElementById('n-4');
const n5 = document.getElementById('n-5');
const n6 = document.getElementById('n-6');
const n7 = document.getElementById('n-7');
const n8 = document.getElementById('n-8');
const n9 = document.getElementById('n-9');
const n0 = document.getElementById('n-0');

let numbers = [];
let numberToInt;
let numberToDisplay = '';
let score = 10;
let highScore = 0;
let randonNumber = parseInt((Math.random() * (20 - 0) + 0).toFixed(0));

//show the score
const setScoreScreen = () => {
  scoreText.textContent = `SCORE: ${score}`;
};

// show the high score
const setHighScore = () => {
  highScoreText.textContent = `HIGH SCORE: ${highScore}`;
};

// evaluate the highScore
const compareHighScores = () => {
  if (score > highScore) highScore = score;
};

// displaying numbers in the screen
const displayNumber = (numToDisplay) => {
  inputNumber.value = numToDisplay;
};

// reset elements
const resetDisplayNumber = () => {
  numberToInt = '';
  numberToDisplay = '';
  inputNumber.value = numberToInt;
};

// merge all numbers, then display it in the screen
const mergeNumbers = (numbers) => {
  numbers.map((number) => (numberToDisplay += `${number}`));
  numberToInt = parseInt(numberToDisplay);
  displayNumber(numberToInt);
};

// getting the numbers from the keyboard
const retrieveNumber = (number) => {
  numbers.push(parseInt(number));
  mergeNumbers(numbers);
  numbers.shift();
};

// waiting for the user that click the numbers button to retrieve values
n1.addEventListener('click', () => retrieveNumber(n1.textContent));
n2.addEventListener('click', () => retrieveNumber(n2.textContent));
n3.addEventListener('click', () => retrieveNumber(n3.textContent));
n4.addEventListener('click', () => retrieveNumber(n4.textContent));
n5.addEventListener('click', () => retrieveNumber(n5.textContent));
n6.addEventListener('click', () => retrieveNumber(n6.textContent));
n7.addEventListener('click', () => retrieveNumber(n7.textContent));
n8.addEventListener('click', () => retrieveNumber(n8.textContent));
n9.addEventListener('click', () => retrieveNumber(n9.textContent));
n0.addEventListener('click', () => retrieveNumber(n0.textContent));

// delete number according the array tht recieve
const deleteNumbers = (arr) => {
  // delete the last element in the array
  arr.pop();
  // set de new value in numberToDisplay converting all the element in arr
  //to astring and then replacing the comas
  numberToDisplay = arr.toString().replace(/,/g, '');
  numberToInt = parseInt(numberToDisplay) ? parseInt(numberToDisplay) : '';
  //showing in the screen
  displayNumber(numberToInt);
};

document.addEventListener('keyup', (e) => {
  //to delete numbers if the user wants
  if (e.code === 'Backspace') {
    deleteNumbers([...numberToDisplay]);
  }

  // waiting for the user that click the numbers button in the keyboard to retrieve values
  switch (e.key) {
    case '1':
      retrieveNumber('1');
      break;
    case '2':
      retrieveNumber('2');
      break;
    case '3':
      retrieveNumber('3');
      break;
    case '4':
      retrieveNumber('4');
      break;
    case '5':
      retrieveNumber('5');
      break;
    case '6':
      retrieveNumber('6');
      break;
    case '7':
      retrieveNumber('7');
      break;
    case '8':
      retrieveNumber('8');
      break;
    case '9':
      retrieveNumber('9');
      break;
    case '0':
      retrieveNumber('0');
      break;
  }
});

//modal
const active = document.querySelector('.box');
const closeModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(closeModal);

const closeModalFunc = () => {
  active.classList.remove('active');
  overlay.classList.remove('overlay-active');
};

closeModal.forEach((singleElement) => {
  singleElement.addEventListener('click', closeModalFunc);
});

overlay.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModalFunc();
  }
});

const toggleStylesWrong = () => {
  displayGuessNumber.classList.toggle('display-guess-number-wrong');
  inputNumber.classList.toggle('input-bkg-white');
};

const toggleStylesWin = () => {
  displayGuessNumber.classList.toggle('display-guess-number-win');
  inputNumber.classList.toggle('input-bkg-white');
  mainConatinerNumbers.classList.toggle('disable-button');
};

const callingToggleStylesWrong = () => {
  // toggle the styles
  toggleStylesWrong();
  // waiting to remove them
  setTimeout(() => {
    toggleStylesWrong();
    resetDisplayNumber();
  }, 500);
};

// Main Add Event Listeners

deleteBtn.addEventListener('click', () => {
  deleteNumbers([...numberToDisplay]);
});

checkNumber.addEventListener('click', () => {
  //decrease teh counter
  score -= 1;
  setScoreScreen();
  if (score > 0) {
    //conditions evaluating the number
    if (numberToInt === randonNumber) {
      displayMessage.textContent = 'Victory!';
      toggleStylesWin();
      compareHighScores();
      setHighScore();
    } else if (numberToInt > randonNumber) {
      displayMessage.textContent = 'Too high!';
      callingToggleStylesWrong();
    } else {
      displayMessage.textContent = 'Too low!';
      callingToggleStylesWrong();
    }
  } else {
    //show modal
    active.classList.add('active');
    overlay.classList.add('overlay-active');

    mainConatinerNumbers.classList.toggle('disable-button');
    mainConatinerNumbers.classList.toggle('main-container-loose');
    highScore = score;
    setHighScore();
  }
});

// tryAgainBtn.addEventListener('click', () => {
//   randonNumber = parseInt((Math.random() * (20 - 0) + 0).toFixed(0));
//   console.log('aaa');
//   score = 10;
//   displayMessage.textContent = 'Start Guessing...';
//   setScoreScreen();
//   resetDisplayNumber();
//   closeModalFunc();

//   displayGuessNumber.classList.remove('display-guess-number-win');
//   inputNumber.classList.remove('input-bkg-white');
//   mainConatinerNumbers.classList.remove('disable-button');
//   mainConatinerNumbers.classList.remove('main-container-loose');
// });

tryAgainBtn.forEach((singleElement) => {
  singleElement.addEventListener('click', () => {
    randonNumber = parseInt((Math.random() * (20 - 0) + 0).toFixed(0));
    console.log('aaa');
    score = 10;
    displayMessage.textContent = 'Start Guessing...';
    setScoreScreen();
    resetDisplayNumber();
    closeModalFunc();

    displayGuessNumber.classList.remove('display-guess-number-win');
    inputNumber.classList.remove('input-bkg-white');
    mainConatinerNumbers.classList.remove('disable-button');
    mainConatinerNumbers.classList.remove('main-container-loose');
  });
});

// calling functions

//showing scores
setScoreScreen();
setHighScore();
