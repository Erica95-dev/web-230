/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

/*
; Title:perry-excerise 5.3
; Author: Erica Perry
; Date: 6/26/2020
; modified by: Erica Perry
; Description: Object Collections
;===========================================
*/

var header =require('../perry-header.js');


var composers = [
  {lastName: 'Beethhoven', 
  genre: 'Classical',
  rating:'8'},
  {lastName: 'Mozart', 
  genre:'Classical',
  rating:'10'},
  {lastName: 'Bach',
   genre:'Classical',
   rating:'9'},
  {lastName: 'Haydn',
   genre:'Classical',
   rating:'6'},
  {lastName: 'Schubert', 
  genre:'Classical',
  rating:'5'},
];
console.log( "-- COMPOSERS --");
composers.forEach(function(composer)
{console.log(" Last Name: " + composer.lastName  + ", Genre: " + composer.genre + " , Rating: " + composer.rating);
})
