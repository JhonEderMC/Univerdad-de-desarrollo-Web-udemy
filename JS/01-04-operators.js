/*
 +  -> addition
 -  -> subtraction
 *  -> multiplication
 ** -> exponentiation
 /  -> division
 %  -> modulus
 ++ -> increment
 -- -> decrement
*/

let a = 3,  b = 2;
let c;
console.log(`a = 3, b = 2`);
// Addition
c = a+b;
console.log(`addition-> a + b: ${c} `);

//subtraction
c = a - b;
console.log(`subtraction-> a - b: ${c}`)

//multiplication
c = a * b;
console.log(`multiplication-> a * b: ${c}`);

//exponentiation
c = a**b;
console.log(`exponentiation-> a^b: ${c}`);

//division
c = a/b;
console.log(`division-> a/b: ${c}`);

//modulus
c = a%b;
console.log(`modulus-> a % b: ${c}`);
console.log(`modulus-> b % b: ${b%b}`);

//increment
console.log(`increment-> b++: ${b++}`);
console.log(`b: ${b}`);
console.log(`increment-> ++b: ${++b}`);
console.log(`b: ${b}`);

//decrement
console.log(`decrement-> b--: ${b--}`);
console.log(`b: ${b}`);
console.log(`decrement-> --b: ${--b}`);
console.log(`b: ${b}`);
