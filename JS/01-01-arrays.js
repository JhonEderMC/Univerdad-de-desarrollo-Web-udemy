const cars = ['BWM', 'MERCEDEZ', 'MAZDA', 'FORD'];
console.table(cars);

//Index
 console.log(`cars[0]: ${cars[0]}`);
 console.log(`cars[1]: ${cars[1]}`);
 console.log(`cars[3]: ${cars[3]}`);

 console.log();
 //For regular
 console.log('Regular for: ')
 for (let index = 0; index <cars.length; index++) {
    const element = cars[index];
    console.log(element);    
 }
console.log()
 //for in
 console.log('For in: ');
 for (const key in cars) {
    if (cars.hasOwnProperty.call(cars, key)) {
      console.log(cars[key]);        
    }
 }

 console.log();
 //foeach
 console.log('ForEach:')
 cars.forEach((car)=> console.log(car));