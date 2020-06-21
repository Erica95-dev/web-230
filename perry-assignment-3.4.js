/*Title: perry-assignment -3.4
Author: Erica Perry
Date:6/15/2020
Modified: Erica Perry
Description: loops

/*
  FirstName LastName
  Assignment 3.4
  Today's Date
  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

// given function
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  

// functions

function Match(A, B) {
  if (A === B) {
    return true;
  }
  else {
    return false;
  }}

function logMismatch(A, B) {
  console.log(A + " and " + B + " do  not match!");
}

function logMatch(C, D) {
  console.log(C + " and " + D + " do match!");
}

var x = randomNumber();

for (var i = 0; i < 10; i++)
var randomNum = randomNumber();
if (Match(x, randomNum)){
  logMatch(x, randomNum);
}
else {
logMismatch(X, randomNUm);
}
}

// editc
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
