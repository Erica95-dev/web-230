/* 

Title: Perry-assignment 6.3.js
Author: Erica Perry
Date:7/05/2020
Description:  Object Literals
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "assignment 6.3.js"));
console.log("\n") */

     
/*
  Expected output:
  FirstName LastName
  Exercise 6.3
  Today's Date
  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

 

// object with nested object
var person = {
  id: "101" ,
  name: "Help Desk Support",
  requestor:"Bob Jones"

}


// output

console.log( " id: " +  person.id  + ','  + " name: " + person.name + ',' + " requestor: " + person.requestor );

