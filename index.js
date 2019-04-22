const x90 = (matrix) => {
  const rotated = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    const row = [];
    for (let j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  return rotated;
};

const x180 = null;

const x270 = null;

module.exports = { x90, x180, x270 };
