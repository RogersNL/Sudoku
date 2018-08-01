export class Sudoku {
  constructor(grid){
    this.grid = grid;
  }

  rowCzech(){
    const compareArray = [1,2,3,4,5,6,7,8,9];

    let checkArray = this.grid.slice();
    for(let i = 0; i < checkArray.length; i++){
      let row = checkArray[i].sort();
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
    let checkArray = this.grid.slice();
    let columns = [];
    for(let i = 0; i < checkArray.length; i++){
      let tempRow = [];
      for(let j = 0; j < checkArray[i].length; j++){
        tempRow.push(checkArray[j][i]);
      }
      columns.push(tempRow);
    }
    for(let k = 0; k < columns.length; k++){
      let row = columns[k].sort();
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
    let checkArray = this.grid.slice();
    let cells = [];
    for(let k=0;k<3;k++){
      for(let m=0;m<3;m++){
        let a = i+k;
        let b = j+m;
        cells.push(checkArray[a][b]);
      }
    }
    let row9 = cells.sort();
    for(let t = 0; t < row9.length; t++){
      if(row9[t] != compareArray[t]){
        return false;
      }
    }
    return true;
  }

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
  // testSubGrid(testNo, rowNo, columnNo){
  //
  // }
  // isSafe(testNo,i,j){
  //   let checkArray = this.grid.slice();
  //   let row = checkArray[i];
  //
  // }
}
