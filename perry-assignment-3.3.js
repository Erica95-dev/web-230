/*
; Title:  Exercise 3.3
; Author: Erica Perry
; Date:  13 June 2020
; Description: loops
; modified: Erica Perry
*/

/*
let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
© 2020 GitHub, Inc.
*/

// start program
 // variable
let eventKeyCode = 13;

// switch satement 
switch(eventKeyCode){
  case 13:
    console.log('The enter key was pressed.');
    break;

  case 16:
    console.log('The shift key was pressed.');
    break;

  case 32:
    console.log('The spacebar key was pressed.');
    break;

  case 8:
    console.log('The backspace/delete key was pressed.');
    break;

  default:
    console.log('unrecognized key.');
}
// end program

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
