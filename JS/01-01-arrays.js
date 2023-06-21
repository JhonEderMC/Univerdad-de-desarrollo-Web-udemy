const cars = ['BWM', 'MERCEDEZ', 'MAZDA', 'FORD'];
console.table(cars);

//Index
 console.log(`cars[0]: ${cars[0]}`);
 console.log(`cars[1]: ${cars[1]}`);
 console.log(`cars[3]: ${cars[3]}`);

 //For regular
 console.log('Regular for:')
 for (let index = 0; index <cars.length; index++) {
    const element = array[index];
    console.log(element);    
 }

 //for in
 for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
 }