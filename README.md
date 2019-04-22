# spinatrix

simple lib for matrix rotation

## example

```javascript
const matrix = [
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
];

const turned90 = spin.x90(matrix);
// turned90 == [
//   ['a', 'a', 'a'],
//   ['b', 'b', 'b'],
//   ['c', 'c', 'c'],
// ];
const turned180 = spin.x180(matrix);
// turned180 == [
//   ['c', 'b', 'a'],
//   ['c', 'b', 'a'],
//   ['c', 'b', 'a'],
// ];
const turned270 = spin.x270(matrix);
// turned270 == [
//   ['c', 'c', 'c'],
//   ['b', 'b', 'b'],
//   ['a', 'a', 'a'],
// ];
```
