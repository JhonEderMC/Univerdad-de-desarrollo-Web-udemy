// define a array 
const namePeople = ['Jean', 'Sara', 'Luis', 'Yeison'];
console.log(`array namePeople: ${namePeople}`)

//type of array (it's an object)
console.log(`typeof namePeople: ${typeof namePeople}`);

//is array
console.log(`is namePeople an array?: ${Array.isArray(namePeople)}`);
//instaceof Array
console.log(`namePeople instanceof Array: ${namePeople instanceof Array}`);
//define a variable that is no array
const nameJean = namePeople[0];
console.log(`nameJean: ${nameJean}`);
//nameJean is array
console.log(`Array.isArray(nameJean): ${Array.isArray(nameJean)}`);
//nameJean instanceOf Array
console.log(`nameJean instanceof Array: ${nameJean instanceof Array}`);