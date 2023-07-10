/* Permite llamar un metodo que esta definido en un objeto desde otro objeto */
const person1 = {
    name: 'Juan',
    lastName: 'Perez',
    fullName: function ()  {return `${this.name} ${this.lastName}`}
};
//Print full name
console.log(person1.fullName())
//create person2 object
const person2 = {
    name: 'Luisa',
    lastName: 'Montoya'
}

//Ahora utilizamos el metodo fullName pero con los datos de person2
const fullName2 = person1.fullName.call(person2);
console.log('fullName2: ', fullName2);


//other example
const person3 = {
    name: 'Pedro',
    age: 15,
    isAgeOf: function () {
        return this.age >= 18;
    }
}
console.log('peronson3.isAgeOf: ', person3.isAgeOf());
const person4 = {
    name: 'Sara',
    age: 30
}
console.log('person4.isAgeOf: ', person3.isAgeOf.call(person4));

//Call using parameters
const car1 = {
    model: 'i3',
    make: 'BMW',
    showData: function (type, year) {
        return `make: ${this.make}, model: ${this.model}, type: ${type}, year: ${year}`
    }
}
const car2 = {
    model: '4',
    make: 'Renoult'
}
console.log(car1.showData());
console.log(car1.showData.call(car2, 'low cost', '1994'));