//Class object, all classs extends of the object class
class Person {
    constructor(name, lastName, age){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    }

    get name(){
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

    basicData = () => `name: ${this.name} lastName: ${this.lastName} age: ${this.age}`;

    //overwriting to string from class Object
    toString() {
        return this.basicData();
    }
}

//Now, we are going to create a person object
const person = new Person('Luis', 'Estela', 30);
console.log(person.toString());

class Employee extends Person {
    constructor(name, lastName, age, job) {
        super(name, lastName, age)
        this._job = job;
    }

    get job() {
        return this._job;
    }
    set job(job) {
        this._job = job;
    }
    //Here we are going overwrinting this method that is extends(inherit) class person    
    //basicData = () => `${super.basicData()} job: ${this.job}`;
    basicData = () => `name: ${this.name} lastName: ${this.lastName} age: ${this.age} job: ${this.job}`;
}

const employee = new Employee('Pedro', 'Ramirez', 27, 'Developer');
console.log(employee.basicData());
console.log(employee.toString()); //This is polimorfism, that execute basicData method of employee and not or the perosn