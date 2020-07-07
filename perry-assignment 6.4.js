/* 

Title: Perry-assignment 6.4.js
Author: Erica Perry
Date:7/05/2020
Description:  Object Literals
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "assignment 6.4.js"));
console.log("\n") */

     
/*

  FirstName LastName
  Assignment 6.4
  Today's Date
  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// object literal with a nessted object literal inside
const ticket = {
  id:105,
  name: "Basketball",
  dateCreated: "7/05/2020",
  priority:"top",
  person :{
    id:105,
    firstName:"Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
};

//output
 
 
console.log(" Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle+ ").");
