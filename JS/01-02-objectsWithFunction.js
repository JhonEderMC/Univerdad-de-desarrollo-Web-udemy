//Person with function by concat full name
const person = {
    name: 'Carlos',
    lastName: 'Davila',
    age: 17,
    fullName: function() { return `${this.name} ${this.lastName}`}
}
//This is a function asociate to person

console.log(person);
console.log(person.fullName());