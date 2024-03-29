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
/////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////

//Arrow Functions
//the advantage of an arrow func is the return is done implicitly,
//we dont have to write the word return
//they also dont get a this keyword
//It is good for one liner functions
//here we assign the arrow function to the var calcAge3
//which is also the name of the function in a way
//type funcName = parameter => what we want to return
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

/////////////////////////////////////////////////////////////////////////////////////

/*
//Reviewing Functions
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

//function expressions are functions that do not need a name if assigned to a var
const yearsUntilRetirement = function (birthYear, firstName) {
  //the var used to save the returned value is called the function output
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  //we say a function has returned because once it hits the return statement,
  //the code is exiting the function, meant those console.log wont execute
  if (retirement > 0) {
    return retirement;
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    return -1;
    console.log(`${firstName} has already retired 🎉`);
  }
};

console.log(yearsUntilRetirement(1986, "jerome"));
console.log(yearsUntilRetirement(1970, "max"));
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
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
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
//Basic array operations
const friends = ["john", "max", "sam"];
console.log(friends);
//add at the end of the array
//by assiging to a var "newLenght" we can retrieve the length of the array
const newLength = friends.push("jay");
console.log(friends); // will have jay at the end
console.log(newLength); // display 4

//adds at the beginning of the array
friends.unshift("jack");
console.log(friends);

//remove the last element of the Array
friends.pop();
//return the pooped element
const popped = friends.pop();
console.log(popped);
console.log(friends);

//remove element at the beginning of the array
friends.shift();
console.log(friends);

//tells at which position in the array the element is
//the value returned is 0 based
console.log(friends.indexOf("max"));
//if we do it for an element that is not there we get -1
console.log(friends.indexOf("bob"));

//returns true is the element is in the array and false if not
console.log(friends.includes("max")); // true
console.log(friends.includes("bob")); // false
//.includes works with strictmode
friends.push(23);
console.log(friends.includes(23)); // true
console.log(friends.includes("23")); // false

//the most use case of the include method is for if else
if (friends.includes("max")) {
  console.log("you have a friend called max");
} else {
  console.log("you don't have a friend called max");
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
//Introduction to Objects
//Unlike arrays, elements in an object can be assigned name, key-value pairs
const jeromeArray = [
	"jerome",
	"challet",
	2024 - 1986,
	"engineer",
	["michale", "peter", "steven"],
];

//each is also called a property
//creating an object this way is called the object literal syntax
//In objects, the order of the values do not matter when we retrieve them
const jeromeObject = {
	firstName: "jerome",
	lastName: "challet",
	birthYear: 2024 - 1986,
	job: "engineer",
	friends: ["michale", "peter", "steven"],
};
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
//Dot vs Bracket Notation
//also known as Member Access and Computed Member Access
//we use the bracket notation when we first need to compute the property name, to access properties dynamically
//i allows us to access properties dynamically or when the property is not a valid identifier
//we use the dot notation when we want it to be simpler but we cannot use expressions
//we use it when the property name is known and is a valid identifier
const jeromeObject = {
	firstName: "jerome",
	lastName: "challet",
	birthYear: 2024 - 1986,
	job: "engineer",
	friends: ["michael", "peter", "steven"],
};
console.log(jeromeObject);

//the first way to retrieve a property from an object is with the dot notation
console.log(jeromeObject.lastName);
//the second way is with the bracket notation
//remember to use "" inside the []
console.log(jeromeObject["lastName"]);
//in the brackets we can put any expression/operation, something that produces a value
//"Name" is the repeating part of the properties up in jeromeObject (firstName, lastName)
const nameKey = "Name";
console.log(jeromeObject["first" + nameKey]);
console.log(jeromeObject["last" + nameKey]);
//that would not work cause in dot notation we need to use the real property name
//console.log(jerome."last" + nameKey)

//prompts need to be stored into variables in order to be used
const interestedIn = prompt(
	"what do you want to know about jerome? firstName, lastName, age, job, friends"
);
//undefined is what we get when we try to access a property on an object that does not exist
//in this case, jeromeObject does not have a property called interestedIn
console.log(jeromeObject.interestedIn); // will be undefined
console.log(jeromeObject[interestedIn]); // will be the right answer

//if the value exists, it will display
if (jeromeObject[interestedIn]) {
	console.log(jeromeObject[interestedIn]);
} else {
	console.log("you did not write: firstName, lastName, age, job, friends");
}

//althoug declared later, these properties are added to the object
jeromeObject.location = "Japan";
jeromeObject["twitter"] = "@jeromechallet";
console.log(jeromeObject);

//challenge
// "jerome has 3 friends, and his best friend is called michael"
console.log(
	`${jeromeObject.firstName} has ${jeromeObject.friends.length} friends, and his best friend is called ${jeromeObject.friends[0]}`
);
*/

/*
//Object Methods
//functions are really just another type of value
//meaning we can create a new key value pair in which the value is just a function
//Therefore we can add functions to objects
const jeromeObject = {
  firstName: "jerome",
  lastName: "challet",
  birthYear: 1986,
  job: "engineer",
  friends: ["michael", "peter", "steven"],
  hasDriversLicense: true,

  //this is an object method
  //an object method is a property that holds a function value
  //Any function that is attached to an object is called a method
  //it must be an expression
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },
  //a declaration would not work though
  //will give error syntax
  // function(birthYear) {
  // 	return 2024 - birthYear;
  // },

  //"this" allows us to read directly from the function itself
  //without having to pas it in as a parameter
  //"this" is basically equal to the object on which the method is called
  //"this" is equal to the object calling the method
  //"this" refers to the parent in this case jeromeObject
  //using "this" is DRY
  // calcAge: function () {
  //   console.log(this); // the whole jeromeObject
  //   return 2024 - this.birthYear;
  // },


  //we can use "this" to store a new property
  //here we create age to store the current age
  //so we don't have to calculate it again thus keeping it DRY
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    //remember to use "this"to return the newly created parameter
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} ${this.job} and he has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license
    }`;
  },
};

//both return the same
//for the first object method that do not use this
// console.log(jeromeObject.calcAge(1986));
// console.log(jeromeObject["calcAge"](1986));
//for the object method that uses this
console.log(jeromeObject.calcAge());
//calls the the method object which also use "this"
console.log(jeromeObject.age);
console.log(jeromeObject.age);
console.log(jeromeObject.age);

//dont foget the () when calling an object method
console.log(jeromeObject.getSummary());
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
//Iteration the forloop
//if else statements and loops are called controlled structure
for (let rep = 1; rep <= 10; rep++) {
  console.log(`rep: ${rep}`);
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
//Looping, Arrays, Breaking, Continuing
const jeromeObject = [
  "jerome",
  "challet",
  1986,
 "engineer",
  ["michael", "peter", "steven"],
];

const types = [];

//looping an object and arrays
for (let i; i < jeromeObject.length; i++) {
  console.log(jeromeObject[i], typeof jeromeObject[i]);

  //assigns the types of the obj to another one
  //types[i] = typeof jeromeObject[i];
  //very important to add elements at the end of the array thus .push
  types.push(typeof jeromeObject[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2070];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

//continue will keep skip through the loop and break will end it
console.log("--- ONLY STRINGS ---");
for (let i; i < jeromeObject.length; i++) {
  if (typeof jeromeObject[i] !== "string") continue;
  console.log(jeromeObject[i], typeof jeromeObject[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i; i < jeromeObject.length; i++) {
  if (typeof jeromeObject[i] === "number") break;
  console.log(jeromeObject[i], typeof jeromeObject[i]);
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
//48.Looping Backwards And Loops In Loops
const jeromeObject = [
  "jerome",
  "challet",
  1986,
  "engineer",
  ["michael", "peter", "steven"],
];

for (let i = jeromeObject.length - 1; i >= 0; i--) {
  console.log(i, jeromeObject[i]);
}

//nested for loop
// i <= 5 is the same as i<6
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------- Starting Exercise --------- exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weight repetition ${rep}💪`);
  }
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/**/
//While Loop
//the while loop does not have to depend on any counter variable
//meaning if you need a loop without a counter you use the while loop
//also means if you do not know how many iterations will have you use a while loop
//the ref value must be declared beforehand outside
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetition ${rep}💪`);
}

//the big difference with a for loop is that here you can use any kind of condition
//keep rolling the die until you get a 6
let dice = Math.trunc(Math.random() * 6 + 1); //random nb generator
console.log(dice);

//if the first roll is a 6 then there will be 0 iterations and the console.log wont display anything
while (dice !== 6) {
  console.log(`u rolled a ${dice}`);
  //the value random value must be reassigned at every iteration
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("loop is about to end...");
}
