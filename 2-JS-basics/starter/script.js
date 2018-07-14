let myFirstName = 'Niki';
let myLastName = 'Wolf';
console.log(myFirstName, myLastName);

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

/* Using some ES6 syntax here instead of ES5... because I have already learned some of it - nw  */

/*
const markMass = 83;
const johnMass = 105;

const markHeight = 1.905;
const johnHeight = 1.8;

const markBmi = markMass / (markHeight * markHeight);
const johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi, johnBmi);

const isHigher = markBmi > johnBmi;

console.log(`Is Mark's BMI higher than John's? ${isHigher}`);
*/

// If / else statements

/*
const firstNameTwo = 'Pete';
const civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstNameTwo + ' is married!');
} else {
  console.log(firstNameTwo + ' is not married.');
}
*/

/*
const markMass = 83;
const johnMass = 105;

const markHeight = 1.905;
const johnHeight = 1.8;

const markBmi = markMass / (markHeight * markHeight);
const johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi, johnBmi);

//const isHigher = markBmi > johnBmi;
//console.log(`Is Mark's BMI higher than John's? ${isHigher}`);

if (markBmi > johnBmi) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}
*/

// Boolean logic
/*

let firstName = 'John';
let age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {  // between 13 and 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {  // between 20 and 30
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}

*/

// Ternary operator and switch statements
/*
let firstName = 'John';
let age = 16;

age >= 21 ? console.log(firstName + ' can drink beer.')
:  console.log(firstName + ' cannot drink beer.');

let drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

let job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in San Francisco.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
    break;
};



switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
    break;
}
*/

// Truthy and Falsy values

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
let height;
height = 0;

if (height || height === 0) {
  console.log('Variable is defined.');
} else {
  console.log('Variable has not been defined.');
}
*/

// stopped @ 1:50 on the video on JS-2 coding challenge




















