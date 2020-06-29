/* 
Title: perry-excerise 5.2.js
Author: Erica Perry
Date:6/26/2020
Modified: Erica Perry
Description: ES5 Built-in Functions:
*/

/*
const header = require('./header.js');
console.log(header.display("Erica", "Perry", " assignment 5.4"));
*/

/*
  FirstName LastName
  Assignment 5.4
  Today's Date
  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven
  Rating: 10
  Composer: Mozart
  Rating: 9
  Composer: Bach
  Rating: 6
  Composer: Haydn
  Rating: 5
  Composer: Schubert
  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven
  Genre: Classical
  Composer: Mozart
  Genre: Classical
  Composer: Bach
  Genre: Classical
  Composer: Haydn
  Genre: Classical
  Composer: Schubert
*/



var composers = [
    {
      lastName: 'Beethhoven', 
      genre: 'Classical',
      rating:'8'
    },
    {
      lastName: 'Mozart', 
      genre:'Classical',
      rating:'10'
    },
    {
      lastName: 'Bach',
      genre:'Classical',
      rating:'9'
    },
    {
      lastName: 'Haydn',
      genre:'Classical',
      rating:'6'
    },
    {
      lastName: 'Schubert', 
      genre:'Classical',
      rating:'5'
    },
  ];
  
  var ratings = composers.map(function(composer) {
    return {
      rating: composer.rating,
      lastName: composer.lastName
    }
  });
  
  var genres = composers.map(function(composer){
    return {
      genre: composer.genre,
      lastName: composer.lastName
    }
  });
  
  console.log(" -- COMPOSER BY RATING -- ");
  
  ratings.forEach(function(composer){
    console.log("Rating: " + composer.rating);
    console.log("Composer: " + composer.lastName);
  });
  
  console.log( "-- COMPOSER BY GENRE --");
  
  genres.forEach(function(composer){
   console.log("Genre: " + composer.genre);
   console.log("Composer: " + composer.lastName);
  
  });
