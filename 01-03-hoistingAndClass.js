/*Con clases primero tenemos que definir la clase y luego utilizarla */

//This is an error in class don't be hoisting
const person = new Person('Pedro', 'Tamayo');

class Person {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }
}
// defined or used class Person after class is created
const person1 = new Person('Pedro', 'Tamayo');
