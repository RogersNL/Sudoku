export class Sudoku {
  constructor(grid){
    this.grid = grid;
  }
//Checks for complete board rows/columns/3x3 subgrids
  rowCzech(){
    const compareArray = [1,2,3,4,5,6,7,8,9];

    for(let i = 0; i < this.grid.length; i++){
      let row = this.grid[i].slice().sort();
      for(let j = 0; j < row.length; j++){
        if(row[j] != compareArray[j]){
          return false;
        }
      }
    }
    return true;
  }
  columnCzech(){
    const compareArray = [1,2,3,4,5,6,7,8,9];
    let columns = [];
    for(let i = 0; i < this.grid.length; i++){
      let tempRow = [];
      for(let j = 0; j < this.grid[i].length; j++){
        tempRow.push(this.grid[j][i]);
      }
      columns.push(tempRow);
    }
    for(let k = 0; k < columns.length; k++){
      let row = columns[k].slice().sort();
      for(let f = 0; f < row.length; f++){
        if(row[f] != compareArray[f]){
          return false;
        }
      }
    }
    return true;
  }

  cellCzech(){
    let flag;
    for(let k=0;k<3;k++){
      for(let m=0;m<3;m++){
        flag=this.checkGrid(k*3,m*3);
        if(flag===false) return false;
      }
    }
    return true;
  }

  checkGrid(i,j){
    const compareArray = [1,2,3,4,5,6,7,8,9];
    let cells = [];
    for(let k=0;k<3;k++){
      for(let m=0;m<3;m++){
        let a = i+k;
        let b = j+m;
        cells.push(this.grid[a][b]);
      }
    }
    let row9 = cells.slice().sort();
    for(let t = 0; t < row9.length; t++){
      if(row9[t] != compareArray[t]){
        return false;
      }
    }
    return true;
  }
//Tests rows and columns for possible solutions for one square
  testRowAndColumn(testNo, rowNo, columnNo){
    for(let j = 0; j < this.grid[rowNo].length; j++){
      if(this.grid[rowNo][j] === testNo){
        return false;
      }
    }
    for(let i = 0; i < this.grid.length; i++){
      if(this.grid[i][columnNo] === testNo){
        return false;
      }
    }
    return true;
  }
  //Tests 3x3 subgrid for possible solutions in one square
  testSubGrid(testNo, rowNo, columnNo){
    let i = rowNo - rowNo%3;
    let j = columnNo - columnNo%3;
    let row = [];
    for(let k = 0 + i; k < 3 + i; k++){
      for(let m = 0 + j; m < 3 + j; m++){
        row.push(this.grid[k][m]);
      }
    }
    for(let s = 0; s < row.length; s++){
      if(row[s] === testNo){
        return false;
      }
    }
    return true;
  }

  //Tests if space is empty
  isEmpty(i,j){
    for(let f = 1; f < 10; f++){
      if(this.grid[i][j] === f){
        return false;
      }
    }
    return true;
  }
  //Combines testRowAndColumn and testSubGrid to push possible solutions to an array
  possibleSolutions(i,j){
    let xPosition = i;
    let yPosition = j;
    let solutions = [];
    for(let z = 1; z < 10; z++){
      if(this.testRowAndColumn(z, xPosition, yPosition) && this.testSubGrid(z, xPosition, yPosition)){
        solutions.push(z);
      }
    }
    return solutions;
  }
  //Creates an array that mirrors the board with the possible solutions array for each square
  create3DMonster(){
    let monster = [];
    for(let m = 0; m < this.grid.length; m++){
      let tempRow = [];
      for(let n = 0; n < this.grid.length; n++){
        if(this.isEmpty(m,n)){
          tempRow.push(this.possibleSolutions(m,n));
        } else {
          tempRow.push([]);
        }
      }
      monster.push(tempRow);
    }
    return monster;
  }
  //Checks for solution arrays that contain 1 possible solution and splices that number into the game board
  spliceSolutions(){
    console.log("Hi!");
    let replaceCase = 1;
    let i = 0;
    while(i < 30){
      let monster = this.create3DMonster();
      replaceCase = 0;
      for(let s = 0; s < monster.length; s++){
        for(let n = 0; n < monster[s].length; n++){
          if(monster[s][n].length === 1){
            this.grid[s].splice(n,1,monster[s][n][0]);
            replaceCase = 1;
          }
        }
      }
      if(replaceCase === 0){
        break;
      }
      // replaceCase = false;
      // for (var r = 0; r < 9; r++) {
      //   console.log(this.grid[i]);
      //   console.log("----");
      // }
      // console.log(this.grid);
      i++;
      console.log(i);
    }
    // return this.grid;
  }
  // endLoop(lastGrid){
  //   for(let y = 0; y < this.grid.length; y++){
  //     for(let z = 0; z < this.grid[y].length; z++){
  //       if(this.grid[y][z] != lastGrid[y][z]){
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  // }
  // solveLooper(){
  //   let i = 0;
  //   while(i < 100){
  //     this.spliceSolutions();
  //     i++;
  //   }
  //   return this.checkWin();
  // }
  // checkWin(){
  //   return this.rowCzech() && this.columnCzech() && this.cellCzech();
  // }
  // nextSolution(){
  //   let testGrid = this.grid.slice();
  //   for(let c = 0; c < testGrid.length; c++){
  //     for(let d = 0; d < testGrid[c].length; d++){
  //
  //     }
  //   }
  // }
  // hasNoSolution(){
  //   for(let q = 0; q < grid.length; q++){
  //     for(let r = 0; r < grid[q].length; r++){
  //       if(this.possibleSolutions(q,r).length === 0){
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  // isSafe(testNo,i,j){
  //   let checkArray = this.grid.slice();
  //   let row = checkArray[i];
  //
  // }
}
