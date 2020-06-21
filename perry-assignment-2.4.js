/* 
Title: Perry-assignment 2.4.js
Author: Erica Perry
Date:5/30/2020
Modified: Erica Perry
Description: types,values and variables
*/


/*
  
  FirstName LastName
  Assignment 2.4
  Today's Date
  Hello my name is <your actual name goes here>!
  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.
  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.
*/

function fullName (firstName, lastName) {
  return firstName + " " + lastName;
}

function dateWriter ( year, month, day) {
  return month + "/" + day + "/" + year ;
}

function formatNumber(val, numOfPos) {
  return val.toFixed(numOfPos)
}
}

function convertToInt(a){
  return parseInt(a);
}

function convertToFloat(a){
  return parseFloat(a);
}
// calling the functions 
console.log(fullName("Erica", "Perry"));
console.log(dateWriter("2020","5","30"));
console.log(formatNumber(33.634252342,1));
console.log(convertToInt("25"));
console.log(convertToFloat("8000.15"));

console.log("Hello my name is " + fullName("Erica", "Perry") + "! Today's date is " + dateWriter("2020","5","30") + " and the current temputure is " + formatNumber(33.634252342,1) + " degreess. I am " + convertToInt(" 25 ") + " years old "  + " and my saving account goal is " + convertToFloat("8000.15") + " dollars. ")

// .editcode
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
