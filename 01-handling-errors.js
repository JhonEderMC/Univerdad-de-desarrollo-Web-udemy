"use strict"

try {
    x = 10;    
} catch (error) {
    console.log(error);
}
finally {
    console.log('The error inspection finished')
}

console.log('Continue...')


try {
    const x = 10;
} catch(error) {
    console.log(error);
} finally {
    console.log('Finally always execute');
}

console.log('Continue2...');