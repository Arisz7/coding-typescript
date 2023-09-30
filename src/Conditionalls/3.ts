// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }

var rect = { x: 0, y: 12, width: "12cm", height: "15cm" };

var { x, y, width, height } = rect;

rect.x = 10;
rect.y = 30;
({ x, y, width, height } = rect);

// console.log(rect);

var { x, y, ...remaining } = { x: 1, y: 2, z: 3, d: 4, n: 5, p: 6, t: 7 };
// console.log(x, y, remaining);

function taco(safePoint: { x: number; z: number }) {}

const safePoint2 = { x: 2, z: 3, y: 2, m: 4, t: 10 };

const { t, ...safePoint } = safePoint2;
taco(safePoint2);

console.log(safePoint2);

var x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y);
