'use strict'

try {
   const x = '213130a'
   if(isNaN(x)) {
    throw {
        
            name: 'NotNumber',
            message: 'This si not a nomber'
    }
   }
} catch (error) {
    console.log(error);
    console.log(error.name);
   console.log(error.message);
}