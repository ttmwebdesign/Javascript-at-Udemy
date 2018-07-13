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

let firstName = 'John';
let age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age > 13 && age < 20) {  // between 13 and 20
  console.log(firstName + ' is a teenager.');
} else {
  console.log(firstName + ' is a man.');
}