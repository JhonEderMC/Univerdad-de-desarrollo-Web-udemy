//Attributes they are asocite to class and not an instance of this class
class Person {
    
    static countPerson = 0;

    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
        Person.countPerson++;
    }
}

class Employee extends Person {
    constructor(name, lastName, job) {
        super(name, lastName, job);
        this._job = job;
    }
}

//We're going to create two object, first person and second Employee
console.log('Count person:', Person.countPerson);
const person = new Person('Henry', 'Kriol');
console.log('Peson:',person);
console.log('Count person:', Person.countPerson);
const employee = new Employee('Daniel', 'Sanchez', 'Developer');
console.log('Employee:',employee);
console.log('Count person:', Employee.countPerson);

