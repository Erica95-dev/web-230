/* 
Title: Perry-assignment 4.4.js
Author: Erica Perry
Date:6/19/2020
Modified: Erica Perry
Description: predicates
*/
/*
  .
  FirstName LastName
  Assignment 4.4
  Today's Date
  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada
  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada
  -- SELECTED VALUE --
  Iowa
*/
 
 // start program
// out put
console.log( "-- ORIGINAL ARRAY--");

var states = ["Alabama", "Nebraska", "Iowa", " California","Nevada"];
console.log(states);

console.log("-- SORTED ARRAY--")
states.sort();
console.log(states);

function getState(a, b){
  if(a==b){
  return true;
  }
  else{
    return false;
  }
}
// new line
console.log("-- SELECTED VALUE--")
var selectedState = "Iowa";

var filteredStates = states.filter(state => getState(state,selectedState));

console.log(filteredStates[0]);

//.editorconfig
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
