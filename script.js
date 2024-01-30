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
*/
/*
//Arrow Functions
//the advantage of an arrow func is the return is done implicitly,
//we dont have to write the word return
//they also dont get a this keyword
//It is good for one liner functions
//here we assign the arrow function to the var calcAge3
//which is also the name of the function in a way
//parameter => what we want to return
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1986);

//the return can be omited in an arrow function only if it's a one liner
//that is not the case here
// const yearsUntilRetirement = (birthYear) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

//again, the var we assigned the arrow function to,
//is kinda the name of the function and how we call the argument
//yearsUntilRetirement(1991);

//when we have several parameters, we wrap it with ()
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

//we seperate arguments with ,
console.log(yearsUntilRetirement(1986, "jerome"));
console.log(yearsUntilRetirement(1956, "sam"));
*/

//Introduction to arrays
//an array is like a big container in which we throw var that we can later change
//use [] to create an array
const friends = ["john", "max", "sam"];
console.log(friends);

//we can also create an array this way
//new arrayName(var1,var2,var3)
const y = new Array(1986, 1984, 208, 2020);

console.log(friends[0]); // jerome displayed
console.log(friends[2]); // sam displayed
// return length of the array but it's not 0 based
// so if there are 3 elements, we get 3 not 2
console.log(friends.length);
//display the last value of the array
console.log(friends[friends.length - 1]); // sam displayed

//reassign the value of an array element
//here we have moidifed the array friends yet it is defined as a const up there
//only primitive values are immutable but and array is not a primitive value
friends[2] = "jay";
console.log(friends);
//Howeverwe cannot redeclare the entire array
//friends = ["bob", "alice"]; // illegal statement

//an array can hold different type of values at the same time
const firstName = "jerome";
const jerome = [firstName, "challet", 2024 - 1986, "engineer, friends"];
console.log(jerome); // "jerome", "challet", 37, "engineer", Array[3]
console.log(jerome.length); //5

//practice
const calAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calAge(years)); // NaN

//calculate ages for the 1st, 2nd, last element of the array
const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]); //retrieces the last element

//we can put function calls into an array
const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[years.length - 1]),
];
console.log(ages);
