// creatin object literal or object initilizer
const person = {
    name: 'Paula',
    lastName: 'Valderrama',
    age: 23,
    phone: 5454568887
}

/* using console */
//Direct -> console.log
console.log(person);
//Concat properties
console.log('\nConcat properties -> name: '+person.name+' '+person.lastName);
console.log('\nConcat properties -> name: ',person.name,' ',person.lastName);
console.log(`\nConcat properties -> name: ${person.name} ${person.lastName}`);
//console.table
console.table(person);

/* Using for */
console.log('Use for in: ');
for(nameKey in person) {
    //console.log(nameKey)
    console.log(`person.${nameKey}: ${person[nameKey]}`);
}

console.log('Use for each');
//Object keys
Object.keys(person).forEach((nameKey) => console.log(`person.${nameKey}: ${person[nameKey]}`));
//Object values
Object.values(person).forEach((value) => console.log(value));

/*Using JSOn, convert to Object to String */
console.log(JSON.stringify(person));
