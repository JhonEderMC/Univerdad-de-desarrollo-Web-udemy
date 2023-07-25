//Static const
class Person {

    static _max_count_object = 100;

    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }

    static get MAX_COUNT_OBJECT() {
        return this._max_count_object;
    }
}

console.log(Person.MAX_COUNT_OBJECT);
Person.MAX_COUNT_OBJECT = 10; //The value is not change
console.log(Person.MAX_COUNT_OBJECT);