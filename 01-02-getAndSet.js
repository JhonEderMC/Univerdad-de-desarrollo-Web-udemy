//Method get and set
class Person {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }

    get name() {
        return this._name;
    }
    
    get lastName() {
        return this._lastName;
    }

    set name(name) {
        this._name = name;
    }
    
    set lastName(lastName) {
        this._lastName = lastName;
    }
}
//En JS los métodos get y set no necesitan parentesis, JS entiende esto
const person = new Person('Jairo', 'Perez');
console.log(`person: ${person.name} ${person.lastName}`);

person.name = 'Pedro';
person.lastName = 'Jalisco';
console.log(`person: ${person.name} ${person.lastName}`)