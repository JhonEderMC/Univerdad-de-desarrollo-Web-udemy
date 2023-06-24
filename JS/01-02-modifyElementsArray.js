let cars = ['BMW', 'Mercedes Benz', 'Volvo', 'Jeep'];

/*Original array */
console.log('Array original: ');
cars.forEach((car)=> console.log(car));

/*Modify second element of array */
console.log('\nModify second element of array: cars[1]: "audi"');
cars[1] = 'Audi';
printArray(cars);

/* add an element to the end of the array using push */
console.log('\nadd an element to the end of the array using push: cars.push("Mazda")');
cars.push('Mazda');
printArray(cars);

/* add an element to the end of the array using .length */
console.log('\nadd an element to the end of the array using push: cars[cars.length] = "Renoult"');
cars[cars.length] = 'Renoult';
printArray(cars);

/* add an element empty in array */
console.log('\nAdd an element empty in array: cars[cars.length+1] = "Ford"');
cars[cars.length + 1] = 'Ford'; 
for (const key in cars) {
    if (Object.hasOwnProperty.call(cars, key)) {
        console.log(`${key}: ${cars[key]}`);        
    }
}
console.log(cars);






function printArray(array) {
    array.forEach((car)=> console.log(car));
}