//First create Person class 
class Person {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
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

    printBasicData = ()=> `name: ${this._name} lastName: ${this._lastName}`
}

//Second We are going to create Object Employee
class Employee extends Person {
    constructor(name, lastName, job, salary) {
        super(name, lastName)
        this._job = job;
        this._salary = salary;
    }

    get job() {
        return this._job;
    }

    set job(job) {
        this._job = job;
    }

    get salary() {
        return this._salary
    }

    set salary(salary) {
        this._salary = salary;
    }
}

//We are going to create and object person and employee
const person = new Person('Adrian', 'Ramirez');
const employee = new Employee('Julian', 'Perez', 'Driver', 300);
console.log(person);
console.log(employee);
console.log(employee.name);

const x = new Employee();
console.log(x);

//Extends methods
console.log(person.printBasicData());
console.log(employee.printBasicData());