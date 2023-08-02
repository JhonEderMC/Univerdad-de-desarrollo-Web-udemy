import { Person } from "./Person";

export class Employee extends Person {

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