/* Operators precedence */
let x = 5;
let y = 10;

console.log(`x: ${x}`);
console.log(`y: ${y}`);

let z = ++x + y--;
console.log(`z = ++x + y--: ${z}`);
console.log(`x: ${x}`);
console.log(`y: ${y}`);

let sum1 = 4 + 5*6/3;
console.log(`4 + 5*6/3 = ${sum1}`);
let sum2 = (4+5)*6/3;
console.log(`(4+5)*6/3 = ${sum2}`);