$(document).ready(function(){
  for(let i = 0; i < 9; i++){
    $("#sudoku-board").append("<tr id='row-${i}'></tr>");
    for(let j = 0; j < 9; j++){
      $("#row-${i}").append("<td><input id='cell-${i}-${j}' name='cell-input'></td>")
    }
  }
 //  $('#sudoku-form').submit(function(event) {
 //   event.preventDefault();
 // }
});
