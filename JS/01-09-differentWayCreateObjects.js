/* Differente way of create objects */

//objects
const myObject1 = new Object(); //This is an object
const myObject2 = {}; //This is an object -> using object literal

// create a string
const string1 = new String('Hello world'); // object  String hello world
const string2 = 'Hello world'; // object String hello world
console.log('string1: ', string1);
console.log('string2: ', string2);

//create a number
const number1 = new Number(1);//Uses object number
const number2 = 1; //object number, both theay are same
console.log('number1: ', number1);
console.log('number2: ', number2);
console.log(number1 + number2)

//Boolean
const boolean1 = new Boolean(true);
const boolean2 = true;
console.log('boolean1: ', boolean1);
console.log('boolean2: ', boolean2);

//array
const array1 = new Array(1,2,3,4);
const array2 = [1,2,3,4];
console.log('array1: ', array1);
console.log('array2: ', array2);


//function
const function1 = new Function();
const function2 = function() {};
const function3 = () => {};
console.log('funtion1: ', function1);
console.log('funtion2: ', function2);
console.log('funtion3: ', function3);