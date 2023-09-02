// Promises 
const hellowResolved = message => console.log(message);
const hellowRejected = message => console.log(message);

let myPromise = new Promise((resolve, reject) => {
    let condition = true;
    if(condition) {
        resolve('Resolved')
    }else {
        reject('Rejected')
    }
});
myPromise.then(hellowRejected, hellowRejected);
//This is the same
//myPromise.then(hellowResolved).catch(hellowRejected);