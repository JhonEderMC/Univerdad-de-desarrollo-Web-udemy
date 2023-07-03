// Usign {} for defined they properties
const person1 = {
    name: 'Pedro',
    lastName: 'Sanchez',
    age: 15
}

//Using Object and operator new
let person2 = new Object(); //new object in memory but this is empty
person2.name = 'Luis'; //add property
person2.lastName = 'Angel', //add property or attribute
person2.age = 32;

console.log('Person1: ', person1);
console.log('Person2: ', person2);