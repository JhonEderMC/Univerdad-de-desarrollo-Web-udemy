const person = {
    name: 'Pedro',
    lastName: 'Perez',
    age: 40,
    fullName: function() {return this.name + ' '+ this.lastName}

}

//First way. -> use '.'
console.log(person.name);

//Tow way -> use ['name property']
console.log(person['lastName']);

//for in -> recorrer the properties and object
console.log('\nFor in:');
for (const key in person) { //properties in object
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(person[key])        
    }
}
