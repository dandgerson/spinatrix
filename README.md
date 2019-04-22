# spinatrix

simple lib for matrix rotation

## example

```npm i spinatrix```

```javascript
const spin = require('spinatrix');

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const turned90 = spin.x90(matrix);
// -> [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];
const turned180 = spin.x180(matrix);
// -> [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1],
// ];
const turned270 = spin.x270(matrix);
// -> [
//   [3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7],
// ];
```
