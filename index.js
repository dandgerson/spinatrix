var x90 = function(matrix) {
  var rotated = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    var row = [];
    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  return rotated;
};

var x180 = function(matrix) {
  return matrix
  .map(function(row) { return row.slice().reverse(); })
  .reverse();
};

var x270 = function(matrix) {
  var rotated = [];
  for (let i = matrix[0].length - 1; i >= 0; i -= 1) {
    var row = [];
    for (let j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  return rotated;
};

module.exports = { x90, x180, x270 };
