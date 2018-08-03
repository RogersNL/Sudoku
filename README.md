# _Sudoku Solver_

#### _A Webapp that Solves Sudoku, August 2, 2018_

#### By _**Nick Rogers & Swati Sahay & Colin Bates**_

## Description

_This webapp was created to solve sudoku puzzles._
_Specs:_
1. _Let user enter in a sudoku puzzle._
  - _Example Input: User copies a puzzle into form_
  - _Example Output: Program creates puzzle for solving_
2. _Program will check for possible solutions in rows/columns/3x3grids._
  - _Example Input: "5" into [2,1,6,3,4,"","","",""]_
  - _Example Output: 5 is available in row._
3. _Program will create array of possible solutions for each space._
  - _Example Input: Empty space is found._
  - _Example Output: example array: [5,7] is a possible solution._
4. _Program will splice in any solutions that are certain._
  - _Example Input: example array of solutions: [3]_
  - _Example Output: 3 is entered into the grid._
5. _Program will iterate through the grid until all possible solutions are 2 or more._
  - _Example Input: program inserts values in current loop._
  - _Example Output: program loops through method again._
6. _Program will backtrack recursively and brute force rest of puzzle._
  - _Example Input: program checks solution until fails_
  - _Example Output: program backtracks and tries again_

## Setup/Installation Requirements

* _Clone repository and open with Node.js_
* _To run:_

  _In Node.js:_

  \> npm install;  


## Known Bugs

_No known bugs._

## Support and contact details

_Nick Rogers email: amellocello@msn.com_
_Swati Sahay email: swatiranjan0111@gmail.com_
_Colin Bates email: dragonflylord@gmail.com_

## Technologies Used

_Created with Atom editor.  Use Node.js to view and Jasmine & Karma for testing._

### License

*No license required*

Copyright (c) 2018 **_Nick Rogers & Swati Sahay & Colin Bates_**
