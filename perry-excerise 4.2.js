/* 
Title: Perry-excerise 4.2.js
Author: Erica Perry
Date:6/18/2020
Modified: Erica Perry
Description: Arrays
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.2
  Today's Date
  Apple
  Orange
  Banana
  Mango
  Pear
*/

// start program

var fruits = [ "Apple", "Orange", "Banana", "Mango", "Pear"];

// function 
function getFruit(arr) {
    for ( var y = 0; y < arr.length; y++) {
        console.log(arr[y]);
    }
}
// output from the getFruit() function
getFruit(fruits);

// end array program
