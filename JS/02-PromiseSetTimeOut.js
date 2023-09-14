//
const promise1 = new Promise(resolve => {
    setTimeout(() => resolve('Hello from a promise with setTimeout'), 3000)
});

promise1.then((value) => console.log(value))

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        let dateTime = new Date();        
        resolve(`${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`);
    }, 5000)
});

promise2.then((value) => {console.log(value); 
    return value
}).then(value => console.log(value));

