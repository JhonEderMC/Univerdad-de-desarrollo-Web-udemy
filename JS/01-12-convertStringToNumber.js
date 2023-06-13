/* String to Number */
let stringNumber = "07";
console.log(`stringNumber: ${stringNumber}`);
console.log(`stringNumber is type of: ${typeof stringNumber}`);
//String to number
 let number = Number(stringNumber);
console.log(`number: ${number}`);
console.log(`number is type of: ${typeof number}`);

// Its not a number
stringNumber = "7a";
console.log(`stringNumber: ${stringNumber}`);
number = Number(stringNumber);
console.log(`number: ${number}`);
console.log(`number is type of: ${typeof number}`);
console.log(`number is NaN: ${isNaN(number)}`);