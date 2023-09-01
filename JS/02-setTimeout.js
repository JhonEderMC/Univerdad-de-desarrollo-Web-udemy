// Async calls

function myCallBackFunction() {
    console.log('Hello asycn after of 3 seconds');    
}

setTimeout(myCallBackFunction, 3000);

setTimeout(()=>console.log('Hello async to after 5 seconds'), 5000);