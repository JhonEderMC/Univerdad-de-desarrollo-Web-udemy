class Person {

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

const person = new Person('Jaime', 'Palacios', 30);
console.log(person.toString());

class Employee extends Person {

    static countEmployee = 0;

    constructor(name, lastName, age, salary) {
        super(name, lastName, age);
        this._salary = salary;
        this._idEmployee = ++Employee.countEmployee;
    }


    get idEmployee() {
        return this._idEmployee;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    toString() {
        return `${super.toString()} idEmployee: ${this.idEmployee} salary: ${this.salary}`; 
    }
}

const employee = new Employee('Sara', 'Perez', 33, 3000);
console.log(employee.toString());

 class Client extends Person {

    static countClient = 0;

    constructor(name, lastName, age, registerDate) {
        super(name, lastName, age);
        this._registerDate = registerDate;
        this._idClient = ++Client.countClient;
    }

    get idClient() {
        return this._idClient;
    }
    get registerDate() {
        return this._registerDate;
    }
    set registerDate(registerDate) {
        this._registerDate = registerDate;
    }

    toString() {
        return `${super.toString()} idClient: ${this.idClient} registerDate: ${this.registerDate}`;
    }

 }

 const client = new Client('Diego', 'Perez', 14, new Date());
 console.log(client.toString());