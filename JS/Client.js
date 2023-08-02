import { Person } from "./Person";

export class Client extends Person {

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
