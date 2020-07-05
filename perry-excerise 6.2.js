/* 

Title: Perry-excerise 6.2.js
Author: Erica Perry
Date:7/05/2020
Description:  Exception Handling
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "assignment 6.2.js"));
console.log("\n") */

     
    /*
  Expected output:
  FirstName LastName
  Exercise 6.2
  Today's Date
  Catch clause: <your custom message goes here>
  Finally clause reached...
*/



try {
    // variables
    let x = 0;
    let y = 1;
    const sum = y / x
  
    // if statement

    if (sum === Infinity) throw 'DivideByZeroException'
  
    // output

    console.log(sum)

  } catch (err) { 
  console.log('Catch clause: <your custom message goes here>')

  } finally {
    console.log('Finally clause reached...')
  }
