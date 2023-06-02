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