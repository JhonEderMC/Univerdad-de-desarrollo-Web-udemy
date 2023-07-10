/* Permite llamar a mandar un metodo en un objeto que no tiene previamente definido dicho metodo */

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
//USing apply. This is same that call
console.log('fullName person2: ',person1.fullName.apply(person2));

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
console.log(car1.showData.apply(car2, ['low cost', 1994]));
//La diferencia con call es que los valores tenemos que pasarlos en un arreglo o en otro objeto, no se 
// puede mandar una primitiva directamente. La diferencia es la forma como se pasan los argumentos