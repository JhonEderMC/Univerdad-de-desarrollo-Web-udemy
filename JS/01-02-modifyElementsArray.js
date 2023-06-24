let cars = ['BMW', 'Mercedes Benz', 'Volvo', 'Jeep'];

/*Original array */
console.log('Array original: ');
cars.forEach((car)=> console.log(car));

/*Modify second element of array */
console.log('\nModify second element of array: cars[1]: "audi"');
cars[1] = 'Audi';
printArray(cars);

/* add an element to the end of the array */
console.log('\nadd an element to the end of the array: cars.push("Mazda")');
cars.push('Mazda');
printArray(cars);





function printArray(array) {
    array.forEach((car)=> console.log(car));
}