# spinatrix

simple lib for matrix rotation

## example

```javascript
const spin = require('../spinatrix');

const matrix = [
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
];

const turned90 = spin.x90(matrix);
// -> [
//   ['a', 'a', 'a'],
//   ['b', 'b', 'b'],
//   ['c', 'c', 'c'],
// ];
const turned180 = spin.x180(matrix);
// -> [
//   ['c', 'b', 'a'],
//   ['c', 'b', 'a'],
//   ['c', 'b', 'a'],
// ];
const turned270 = spin.x270(matrix);
// -> [
//   ['c', 'c', 'c'],
//   ['b', 'b', 'b'],
//   ['a', 'a', 'a'],
// ];
```
