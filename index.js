const x90 = (matrix) => {
  const rotated = [];
  for (let i = matrix[0].length; i > 0; i -= 1) {
    const row = [];
    for (let j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  console.log(rotated);
  return rotated;
};

const x180 = null;

const x270 = (matrix) => {
  const rotated = [];
  for (let i = matrix[0].length; i > 0; i -= 1) {
    const row = [];
    for (let j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  console.log(rotated);
  return rotated;
};

module.exports = { x90, x180, x270 };
