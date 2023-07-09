/* Prototype in JS */
//Firt we will create person consutructor

function Person(name, lastName, birthDay) {
    this.name = name;
    this.lastName = lastName;
    this.birthDay = birthDay;
}

//We will create a object father and mother
console.log('Crear objetos father and mother');
const father = new Person('Pedro', 'Perez', 1890);
const mother = new Person('Sanddra', 'Ocampo', 1920);
printMotherAndFather();

//Si por ejemplo agregamos la propiedad o atributo telefonoFijo al objeto father
console.log('\nadd propertie .homePhone to father object: ');
father.homePhone = 13114413;
//Si volvemos a impirmir ambos, esto solo se vera reflejado en el objeto padre y no en el madre
printMotherAndFather();

//Si quiero que un atributo se vea reflejado en ambos objetos utilizo el prototype del objeto Person que los engloba a ambos
console.log('\nAdd proper to nationality to prototype Person');
Person.prototype.nationality = 'Colombian';
printMotherAndFather();
//Si imprimomos el objeto mother and father no se imprime la nacionalidad
//Pero si accedemos directamente a esta propiedad, el prototype la ha asociado a todos los objetos Person
console.log(father.nationality);
console.log(mother.nationality);


function printMotherAndFather() {
    console.log('Father: ', father);
    console.log('Mother: ', mother);
}