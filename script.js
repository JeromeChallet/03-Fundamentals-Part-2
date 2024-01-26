//always declare strict mode at the top
//It allows us to catch common errors
//such as reserved words and undeclared values
"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

//thanks to strict mode, this wont work and return an error
//cause hasDriverLicence miss an s
if (passTest) hasDriverLicence = true;
if (hasDriversLicence) console.log("I can drive");

// the word interface and privete are a js reserved word
// so when we try touse it here, thanks to strict mode,
// it won't let us compile it will return an error
const interface = "Audio";
const privat = 534;
*/

//Functions
//A function is a piece of code that we can reuse over and over again,
//and does one thing... it has a function to fullfill
function logger() {
  console.log("my name is jerome");
}

//when you use the function, you write its name with ()
//it's called running, calling, invoquing the function
logger();
logger();
logger();

//functions are like machines, you give them something and they return something back
//whats inside the () are called parameters, they have it
//BUT parameters being sent to functions are called arguments
//They are the same thing but parameters come out of the func and arguments are sent to the func
//parameters are like empty spaces that we need to fill out
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `the juice has ${apples} apples and ${oranges} oranges`;
  return juice;
}

//here we send the arguments 2 and 5 to the parameters called apples and oranges
fruitProcessor(2, 5);
//to be able to use the returned values, we first must store it in a var
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);
