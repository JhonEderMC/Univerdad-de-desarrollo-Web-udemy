"use strict";

class Employee {

    constructor(name, salary) {
        this._name = name;
        this._salary = salary;        
    }

    getDetails() {
        return `Employe -> name: ${this._name} salary: ${this._salary}`;
    }
}

class Manager extends Employee {

    constructor(name, salary) {
        super(name, salary);
    }

    getDetails() {
        return `Manger -> name: ${this._name} salary: ${this._salary}`;
    }
}

const employe = new Employee('Jean', 300);
const manager = new Manager('Jorge', 1000);

(employe instanceof Employee) ? console.log("It's type of empleado") : console.log('It"s not tipeOf Employee');
(manager instanceof Employee) ? console.log("It's type of empleado") : console.log('It"s not tipeOf Employee');
console.log('manager is intaceOf Manager: '+( manager instanceof Manager));
console.log('manager is intaceOf Employee: '+ (manager instanceof Employee));

