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

//Using function
function car(make, model, year ) {
    this.make = make;
    this.model = model;
    this.year = year;
}
//create object
const car1 = new car('American Eagle', 'MSI', '1992');
console.log('\nCreate object car using a function: ', car1);

//Using Object.create -> create un nuew object base in original object
const person3 = Object.create(person1);
console.log('Using Object.create(person1): ',person3);