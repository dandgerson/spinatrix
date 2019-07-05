class Spinatrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  x90() {
    const rotated = [];
    for (let i = 0; i < this.matrix[0].length; i += 1) {
      const row = [];
      for (let j = this.matrix.length - 1; j >= 0; j -= 1) {
        row.push(this.matrix[j][i]);
      }
      rotated.push(row);
    }
    return rotated;
  }

  x180() {
    return this.matrix
      .map(row => row.slice().reverse())
      .reverse();
  }

  x270() {
    const rotated = [];
    for (let i = this.matrix[0].length - 1; i >= 0; i -= 1) {
      const row = [];
      for (let j = 0; j < this.matrix.length; j += 1) {
        row.push(this.matrix[j][i]);
      }
      rotated.push(row);
    }
    return rotated;
  }
}
