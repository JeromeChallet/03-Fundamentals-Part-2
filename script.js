//always declare strict mode at the top
//It allows us to catch common errors
//such as reserved words and undeclared values
"use strict";

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
