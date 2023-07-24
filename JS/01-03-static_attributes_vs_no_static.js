class Person {
    static countPerson = 0; //it's asosciate to class Person
    _email = 'default email';//it's associate to instance of class Person

    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
        Person.countPerson++;
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
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
}

const person = new Person('Freddy', 'Cortes');
console.log(person); //this has a property email.
console.log(person.email);