function Sudoku(grid){
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
}
Sudoku.prototype.columnCzech = function(){
  var columns = [];
  for(var i = 0; i < this.grid.length; i++){
    for(var j = 0; j < this.grid.length; j++){
      columns.push(this.grid[j][i]);
    }
  }
  for(var k = 0; k < checkArray.length; k++){
    var row = checkArray[k].sort();
    for(var f = 0; f < row.length; f++){
      if(row[f] != compareArray[f]){
        return false;
      }
    }
  }
  return true;
}
Sudoku.prototype.cellCzech = function(){
  var cells = [];
  for(var a = 0; a < 3; a++){
    for(var b = 0; b < 3; b++){
      var row = [];
      row.push(this.grid[a][b]);
      cells.push(row);
    }
  }
  for(var c = 0; c < 3; c++){
    for(var d = 3; d < 6; d++){
      var row = [];
      row.push(this.grid[c][d]);
      cells.push(row);
    }
  }
  for(var e = 0; e < 3; e++)
    for(var f = 6; f < 9; f++){
      var row = [];
      row.push(this.grid[e][f]);
      cells.push(row);
    }
  }
  for(var g = 3; g < 6; g++)
    for(var h = 0; h < 3; h++){
      var row = [];
      row.push(this.grid[g][h]);
      cells.push(row);
    }
  }
  for(var i = 3; i < 6; i++)
    for(var j = 3; j < 6; j++){
      var row = [];
      row.push(this.grid[i][j]);
      cells.push(row);
    }
  }
  for(var k = 3; k < 6; k++)
    for(var l = 6; l < 9; l++){
      var row = [];
      row.push(this.grid[k][l]);
      cells.push(row);
    }
  }
  for(var m = 6; m < 9; m++)
    for(var n = 0; n < 3; n++){
      var row = [];
      row.push(this.grid[m][n]);
      cells.push(row);
    }
  }
  for(var o = 6; o < 9; o++)
    for(var p = 3; p < 6; p++){
      var row = [];
      row.push(this.grid[g][h]);
      cells.push(row);
    }
  }
  for(var q = 6; q < 9; q++)
    for(var r = 6; r < 9; r++){
      var row = [];
      row.push(this.grid[q][r]);
      cells.push(row);
    }
  }
  for(var s = 0; s < checkArray.length; s++){
    var row = checkArray[s].sort();
    for(var t = 0; t < row.length; t++){
      if(row[t] != compareArray[t]){
        return false;
      }
    }
  }
  return true;
}
