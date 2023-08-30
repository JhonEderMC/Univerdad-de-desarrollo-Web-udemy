//Normal Functions
function myNormalFunctions() {
    console.log('Welcome to my normal function');
}

myNormalFunctions();

//Anonymous function
let anonymousFunction = function () {
    console.log('Welcome to anonymous function');
}
anonymousFunction();

//Arrow function -> That's anonymous function
let arrowFunction = () => console.log('Welcome to arrow function')
arrowFunction();

const hello = () => 'hello';
console.log(hello());

//return object
const objectName = () => ({name: 'arrow function'});
console.log(objectName());

//Functions with params
const functionWitParams = (message) => console.log(message);
functionWitParams('params');

//Functions with params. If is one param parentesis they are not necessary
const functionWithParamsOneParam = message => console.log(message);
functionWithParamsOneParam('one param');

const sum = (...args)=> args.reduce((prev,curr) => prev + curr);
console.log(sum(1,2,3,4,5,6,7,8,9));