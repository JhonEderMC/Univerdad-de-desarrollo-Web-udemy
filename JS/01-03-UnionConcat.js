let name = 'Juan';
let lastName = 'Perez';

//operator -> +
let fullName = name + ' '+ lastName;

console.log(`+ -> ${fullName}`);

fullName = undefined;

// operator -> + a number
let variable = name + 1234;
console.log(`juan + 1234: ${variable}`);
variable = 1345 + name;
console.log(`1234 + juan: ${variable}`);
variable = name + 1+2+3+4;
console.log(`juan + 1+2+3+4: ${variable}`);
variable = name + (1+2+3+4);
console.log(`juan + (1+2+3+4): ${variable}`);
variable = 1+2+3+4 + name;
console.log(`1+2+3+4 + juan: ${variable}`);

