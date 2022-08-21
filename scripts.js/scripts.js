const deleteBtn = document.getElementById('btn-delete-number');
const inputNumber = document.getElementById('input-number');
const checkNumber = document.getElementById('btn-check-number');
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
let numberToDisplay = '';
const randonNumber = parseInt((Math.random() * (20 - 0) + 0).toFixed(0));

console.log(randonNumber);

const mergeNumbers = (numbers) => {
  numbers.map((number) => (numberToDisplay += `${number}`));
  inputNumber.value = numberToDisplay;
};

const retrieveNumber = (number) => {
  numbers.push(number);
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

// --------------------

const deleteNumbers = (arr) => {
  // delete the last element in the array
  arr.pop();
  // set de new value in numberToDisplay converting all the element in arr
  //to astring and then replacing the comas
  numberToDisplay = arr.toString().replace(/,/g, '');
  //showing in the screen
  inputNumber.value = numberToDisplay;
};

document.addEventListener('keyup', (e) => {
  //to delete numbers
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

deleteBtn.addEventListener('click', () => {
  deleteNumbers([...numberToDisplay]);
});

checkNumber.addEventListener('click', () => {
  console.log(parseInt(numberToDisplay));

  if (parseInt(numberToDisplay) === randonNumber) {
    console.log('win');
  }
  // if()
});
