// var; const; let

// типы переременных - строки, числа, boolean, массив

const myString = '10';
const myNumber = 10;
const isLoggedIn = false;

// 0 1 2 3 4 ...

const myArray = ['string number 0', 1, '45345', false, 'mark']; // 5

// циклы while & for

for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
}

let i = 0;

while (i <= 10) {
  i++;
  // console.log('while');
}

// условия if else

if (myString === 10) {
  console.log('first condition');
} else if (myString == 10) {
  console.log('second condition');
} else {
  console.log(false);
}

// функции

function sumTwoElems(a, b) {
  return a + b;
}

function multiplyTwoElemes(a, b) {
  return a * b;
}

function sayHello(username) {
  return username + ' hello!';
}

console.log(sumTwoElems(555, 15));
console.log(multiplyTwoElemes(47, 87));
console.log(sayHello('mark'));

let sumOfTwo = sumTwoElems(15, 27);
console.log(sumOfTwo);
