const person = {
    _name: 'Luis',
    _lastName: 'Perez',
    _age: 30,
    _email: 'luisperez@mail.com',
    get name() {return this._name},
    get lastName() {return this._lastName},
    get age() {return this._age},
    get email() {return this._email},
    set name(name) {this._name = name},
    set lastName(lastName) {this._lastName = lastName},
    set age(age) {this._age = age},
    set email(email) {this._email = email}
}

//Print full object
console.log(person);
//USes get
console.log('age: '+person.age);
console.log(`full name: ${person.name} ${person.lastName}`);
console.log(`email: ${person.email}`)

// set age 15
person.age = 15;
console.log(`set age = 15, ${person.age}`);
//set name = Pedro
person.name = 'Pedro';
//set lastName = Toro
person.lastName = 'Toro';
console.log(`New full name: ${person.name} ${person.lastName}`);