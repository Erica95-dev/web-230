/* 

Title: Perry-excerise 7.2.js
Author: Erica Perry
Date:7/12/2020
Description:  constructed objects
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "assignment 7.2.js"));
console.log("\n") */


/*
  Expected output:
  FirstName LastName
  Exercise 7.2
  Today's Date
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

    function employee(id,firstName,lastName,title){

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;

    }

    var employee = [

        new employee(" 1 ", " Thomas ", " Edison ", " Software Engineer "),
        new employee(" 2 "," Benjamin "," Franklin "," Programmer "),
        new employee(" 3 "," Nikola "," Tesla "," Project Manager "),
        new employee(" 4 "," Charles "," Babbage "," Product Manager "),
        new employee(" 5 "," Alexander "," Bell "," Bussiness Analyst "),
    ];

    
    let index = 1
for (let x = 0; x < employee.length; x++) {
  console.log( employee[x]. id + employee[x].firstName + employee[x].lastName + employee[x].title)
  index++
}
    
    

    
