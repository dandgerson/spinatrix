const x90 = (matrix) => {
  const rotated = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    const row = [];
    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  return rotated;
};

const x180 = matrix => matrix
  .map(row => row.slice().reverse())
  .reverse();

const x270 = (matrix) => {
  const rotated = [];
  for (let i = matrix[0].length - 1; i >= 0; i -= 1) {
    const row = [];
    for (let j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  return rotated;
};

module.exports = { x90, x180, x270 };
