const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
  ];

let countRows = function() {
    sum = 0
    for (let i = 0; i < GRID.length; i++) {
        sum ++
    }
    return sum
}

function countColumns() {
    let sum = 0;
  GRID.forEach(function(grid) {
      sum = grid.length;
  }) 
  return sum
}

function gridSize() {
    let rowSize = countRows() 
    let columnSize = countColumns() 
    return columnSize + ' x ' + rowSize
}