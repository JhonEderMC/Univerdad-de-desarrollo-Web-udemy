//Constructor
function Person(name, lastName, age, email) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

const person1 = new Person('Pedro', 'Ramirez', 20, 'pedro@mail.com');
const person2 = new Person('Lina', 'Guerra', 37, 'ligerr@mail.com');

console.log('person1: ', person1);
console.log('person2: ', person2);