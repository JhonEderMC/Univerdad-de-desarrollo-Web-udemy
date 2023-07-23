//method is asociate to class  and are not asociate to instance to class
class Person {
    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
    }

    get name(){
        return this._name;
    }
    get lastName() {
        return this._lastName;
    }
    
    static helloWorld() {
        return 'Hello world from the static method';        
    }
    
    static printPersonalData(person) {  
        return `name: ${person.name} lastName: ${person.lastName}`;

    }
}

//First create person object
const person = new Person('Francis', 'Kisner');
console.log(person);
console.log(Person.helloWorld()); //Only can be use with class and not instance of this.
console.log(Person.printPersonalData(person));

class Employee extends Person {
    constructor(name, lastName, job){
        super(name, lastName)
        this._job = job;
    }
}

const employee = new Employee('Jim', 'Bartan', 'Conserner');
console.log(Employee.printPersonalData(employee));
