/*
============================================
; Title:  function properties
; Author: Erica Perry
; Date: 4 June 2020
; Description: implementing functions
;===========================================
*/

var header =require('../perry-header.js');

//start program


/*
  Expected output:
  FirstName LastName
  Exercise 2.3
  Today's Date
  Hello FirstName LastName!
  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// function properties 
myName.erica = "Erica";

//funcrtion
function myName() {
    return myName.erica;
}

// output 
console.log('\n');
console.log(" Hello " +myName()+ "Perry!");

// end program
