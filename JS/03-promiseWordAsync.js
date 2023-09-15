// Al usar la palabra async en el princpio de un metodo esto oblica a que este tenga que devolver una promesa

async function myFunctionHelloPromise() {
    return "hello with promise and async"; //this's as resolve of promise
}

myFunctionHelloPromise().then(value => console.log(value));


async function myFunctionSetimeOutPromise() {
    return setTimeout(()=> 'Hello setTiemOut', 3000);
}

myFunctionSetimeOutPromise().then((value)=> console.log(value));