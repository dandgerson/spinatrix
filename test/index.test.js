const { assert } = require('chai');

const spin = require('../index');

describe('spinatrix lib', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  describe('x90', () => {
    it('should exist', (done) => {
      assert.exists(spin.x90);
      done();
    });
    it('should be a function', (done) => {
      assert.typeOf(spin.x90, 'function');
      done();
    });
    it('should not change input matrix', (done) => {
      spin.x90(matrix);
      assert.deepEqual(
        matrix, [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      );
      done();
    });
    it('should rotate matrix by 90 degree', (done) => {
      assert.deepEqual(
        spin.x90(matrix), [
          [7, 4, 1],
          [8, 5, 2],
          [9, 6, 3],
        ],
      );
      done();
    });
  });
  describe('x180', () => {
    it('should exist', (done) => {
      assert.exists(spin.x180);
      done();
    });
    it('should be a function', (done) => {
      assert.typeOf(spin.x180, 'function');
      done();
    });
    it('should not change input matrix', (done) => {
      spin.x180(matrix);
      assert.deepEqual(
        matrix, [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      );
      done();
    });
    it('should rotate matrix by 180 degree', (done) => {
      assert.deepEqual(
        spin.x180(matrix), [
          [9, 8, 7],
          [6, 5, 4],
          [3, 2, 1],
        ],
      );
      done();
    });
  });
  describe('x270', () => {
    it('should exist', (done) => {
      assert.exists(spin.x270);
      done();
    });
    it('should be a function', (done) => {
      assert.typeOf(spin.x270, 'function');
      done();
    });
    it('should not change input matrix', (done) => {
      spin.x270(matrix);
      assert.deepEqual(
        matrix, [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      );
      done();
    });
    it('should rotate matrix by 270 degree', (done) => {
      assert.deepEqual(
        spin.x270(matrix), [
          [3, 6, 9],
          [2, 5, 8],
          [1, 4, 7],
        ],
      );
      done();
    });
  });
});
