//String
let name = 'david';
let stringTypeOf = 'type of';
console.log('name: '+name);
console.log(`${stringTypeOf} name:`+ typeof(name));

//number
let number = 13.43;
console.log('number:'+number);
console.log(`${stringTypeOf} number:`+ typeof(number))

//boolean
let flag = true;
console.log('flag: '+ flag);
console.log(`${stringTypeOf} flag: ${typeof(flag)}`);

// function
function myFunction(){};
console.log('myFunction: '+myFunction);
console.log(`${stringTypeOf} myFunction: ${myFunction}`);

//Symbol
let simbol = Symbol("my symbol");
//console.log('symbol: '+simbol);
console.log(`${stringTypeOf} symbol: ${typeof(simbol)}`);

// class
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
console.log('Class person: '+ Person);
console.log(`${stringTypeOf} Person: ${typeof Person}`);

//undefined
let variableUndefined;
console.log('variableUndefined: '+variableUndefined);
console.log(`${stringTypeOf} variableUndefined: ${typeof variableUndefined}`);

//null = ausencia de valor
let variableNUll = null;
console.log(`variableNull: ${variableNUll}`);
console.log(`${stringTypeOf} variableNull: ${typeof variableNUll}`);