export function Sudoku(grid){
  this.grid = grid;
}
var compareArray = [1,2,3,4,5,6,7,8,9];

Sudoku.prototype.rowCzech = function(){
  var checkArray = this.grid.slice();
  for(var i = 0; i < checkArray.length; i++){
    var row = checkArray[i].sort();
    for(var j = 0; j < row.length; j++){
      if(row[j] != compareArray[j]){
        return false;
      }
    }
  }
  return true;
};
Sudoku.prototype.columnCzech = function(){
  var columns = [];
  for(var i = 0; i < this.grid.length; i++){
    for(var j = 0; j < this.grid.length; j++){
      columns.push(this.grid[j][i]);
    }
  }
  for(var k = 0; k < columns.length; k++){
    var row = columns[k].sort();
    for(var f = 0; f < row.length; f++){
      if(row[f] != columns[f]){
        return false;
      }
    }
  }
  return true;
};
Sudoku.prototype.cellCzech = function(){
  var cells = [];
  var row = [];
  var row1 = [];
  var row2 = [];
  var row3 = [];
  var row4 = [];
  var row5 = [];
  var row6 = [];
  var row7 = [];
  var row8 = [];

  for(var a = 0; a < 3; a++){
    for(var b = 0; b < 3; b++){
      row.push(this.grid[a][b]);
    }
  }
  cells.push(row);
  for(var c = 0; c < 3; c++){
    for(var d = 3; d < 6; d++){
      row1.push(this.grid[c][d]);
    }
  }
  cells.push(row1);
  for(var e = 0; e < 3; e++){
    for(var f = 6; f < 9; f++){
      row2.push(this.grid[e][f]);
    }
  }
  cells.push(row2);
  for(var g = 3; g < 6; g++){
    for(var h = 0; h < 3; h++){
      row3.push(this.grid[g][h]);
    }
  }
  cells.push(row3);
  for(var i = 3; i < 6; i++){
    for(var j = 3; j < 6; j++){
      row4.push(this.grid[i][j]);
    }
  }
  cells.push(row4);
  for(var k = 3; k < 6; k++){
    for(var l = 6; l < 9; l++){
      row5.push(this.grid[k][l]);
    }
  }
  cells.push(row5);
  for(var m = 6; m < 9; m++){
    for(var n = 0; n < 3; n++){
      row6.push(this.grid[m][n]);
    }
  }
  cells.push(row6);
  for(var o = 6; o < 9; o++){
    for(var p = 3; p < 6; p++){
      row7.push(this.grid[o][p]);
    }
  }
  cells.push(row7);
  for(var q = 6; q < 9; q++){
    for(var r = 6; r < 9; r++){
      row8.push(this.grid[q][r]);
    }
  }
  cells.push(row8);
  /////////////////////////
  console.log(cells);
  for(var s = 0; s < cells.length; s++){
    var row9 = cells[s].sort();
    for(var t = 0; t < row9.length; t++){
      if(row9[t] != compareArray[t]){
        return false;
      }
    }
  }
  return true;
};
