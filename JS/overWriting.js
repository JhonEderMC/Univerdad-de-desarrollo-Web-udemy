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
const maneger = new Manager('Jorge', 1000);

console.log(employe.getDetails());
console.log(maneger.getDetails());