import { Sudoku } from '../src/sudoku';

describe('Sudoku', function() {

  it('will check for row sudoku', function() {
    let grid = [
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.rowCzech()).toEqual(true);
  });
  it('will check for column sudoku', function() {
    let grid = [
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.columnCzech()).toEqual(true);
  });
  it('will check for cell sudoku', function() {
    let grid = [
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.cellCzech()).toEqual(true);
  });
  it('will check for same number in row and column', function(){
    let grid = [
      [8,2,"",9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let testNo = 4;
    let x = 0;
    let y = 2;
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.testRowAndColumn(testNo,x,y)).toEqual(true);
  });
  it('will check for same number in subgrid', function(){
    let grid = [
      [8,2,"",9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let testNo = 4;
    let x = 0;
    let y = 2;
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.testSubGrid(testNo,x,y)).toEqual(true);
  });
  it('will display the possible solutions of a cell', function(){
    let grid = [
      [8,2,"",9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let x = 0;
    let y = 2;
    let expectedResult = [4];
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.possibleSolutions(x,y)).toEqual(expectedResult);
  });
  it('will create a monster', function(){
    let grid = [
      [5,3,"","",7,"","","",""],
      [6,"","",1,9,5,"","",""],
      ["",9,8,"","","","",6,""],
      [8,"","","",6,"","","",3],
      [4,"","",8,"",3,"","",1],
      [7,"","","",2,"","","",6],
      ["",6,"","","","",2,8,""],
      ["","","",4,1,9,"","",5],
      ["","","","",8,"","",7,9]
    ];
    
  });
});
