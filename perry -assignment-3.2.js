/*
; Title:  Exercise 3.2
; Author: Erica Perry
; Date:  13 June 2020
; Description: function
; modified: Erica Perry
*/

/*
  // output from the match() function
  false
  true
  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

// start program

// variables 

var A = "Truck";
var B = "Car";
var C = "Bike";
var D = "Bike";
var E = "Four";
var F = "Three";

// functions

function Match(A, B) {
  if (A === B) {
    return true;
  }
  else {
    return false;
  }
}

function logMismatch(A, B) {
  console.log(A + " and " + B + " do  not match!");
}

function logMatch(C, D) {
  console.log(C + " and " + D + " do match!");
}

if (Match(A, B)){
  logMatch(A, B);
}
else {
  logMismatch(A, B);
}

if (Match(C, D)){
  logMatch(C, D);
}
else {
  logMismatch(C, D);
}

if (Match(E, F)){
  logMatch(E, F);
}
else {
  logMismatch(E, F);
}
//eng program


[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
