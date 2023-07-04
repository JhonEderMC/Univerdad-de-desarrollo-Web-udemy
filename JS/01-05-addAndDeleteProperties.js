// create object person
const person = {
    name: 'Claudia',
    lastName: 'Mira',
    age: 10
}

console.log('Original Object: ', person);

//add property mail use dot '.'
person.mail = 'claudia@mail.com';
console.log('Add property name using "."', person);

//add property use Object.defineProperties or property
//add city
//Object.defineProperties(person, {city: 'New York'});
//console.log('Using Object.defineProperty: ', person);


//add property addres using add property
Object.assign(person, {address: 'cra 53b #10-c' });
 console.log('Define property using Object method assing', person);

 function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
const car1 = new Car('BMW', 'i3', '1992');
const car2 = new Car('Mazda', '2', '2020');

console.log('\ncar1: ', car1);
console.log('\ncar2: ', car2);
//Add property using prototype
Car.prototype.color = 'gray';
console.log('\ncar1: ', car1.color);
console.log('\ncar2: ', car2.color);


//Delete property age
delete person.age;
console.log(person);