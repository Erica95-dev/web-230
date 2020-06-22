/*
; Title:  
; Author: Erica Perry
; Date: 6/19/2020
; Description: filtering
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

var header = require('../header.js');
// start program
var vehicles = ["car", "Truck", "Motorcycle","Airplane", "Bus"];

// function
function getValue(arr,val) {
  for (var y = 0; y < arr.length; y++) {
    if (arr[y] == val)
       console.log(arr[y]);      
  }
}

//output 
console.log("--DISPLAYING ARRAY ITEMS --");
for ( var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}

// new line
console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// new line
console.log("");

console.log("--SELECTED VALUE --");
getValue(vehicles, "Bus");

//end program
