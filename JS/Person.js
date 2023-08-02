export class Person {

    static countPerson = 0;
    
    constructor(name, lastName, age) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._idPerson = ++Person.countPerson;
    }

    get idPerson() {
        return this._idPerson;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }

    toString() {
        return `idPerson: ${this.idPerson} name: ${this.name} lastName: ${this.lastName} age: ${this.age}`;
    }
}