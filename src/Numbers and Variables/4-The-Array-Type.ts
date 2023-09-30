let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers);

let products: string[] = ["Pizza", "Pan", "Caca"];
// Array of strings and numbers
let mixData: (string | number)[] = [
  "Pizza",
  "Pan",
  "Caca",
  44,
  27,
  90,
  21,
  ";D",
];

let mixData1: (string | number | boolean)[] = [
  "Pizza",
  "Pan",
  "Caca",
  44,
  27,
  90,
  21,
  ";D",
  true,
  false,
];

// console.log(mixData1);

// nested number type array
let myNums: (number | string)[][] = [
  [1, 2],
  [3, 4],
  ["1", "2"],
  ["2", "3"],
];

console.log(myNums);
