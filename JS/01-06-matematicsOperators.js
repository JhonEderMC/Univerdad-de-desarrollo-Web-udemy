let a = 3, b = 2 , c = "3";

//Equality
console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`c : "${c}"`);
console.log('Equality: ')

console.log(`a == b : ${a == b}`); 
console.log(`a == c : ${ a == c}`); // the value is checked regardless of the type
console.log(`a === b : ${a === b}`);
console.log(`a === c : ${ a === c}`); // the value is checked importing the type

// Different
printVariables();
console.log('Different:')
console.log(`a != b : ${a != b}`); 
console.log(`a != c : ${ a != c}`); // the value is checked regardless of the type
console.log(`a !== b : ${a !== b}`);
console.log(`a !== c : ${ a !== c}`); // the value is checked importing the type

// Comparison
printVariables();
console.log('Comparison:')
console.log(`a > b: ${a > b} `);
console.log(`a >= b: ${a >= b} `);
console.log(`a < b: ${a < b} `);
console.log(`a <= b: ${a <= b} `);
console.log(`a > c: ${a > c} `);
console.log(`a >= c: ${a >= c} `);


function printVariables() {
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
    console.log(`c : "${c}"`);
}