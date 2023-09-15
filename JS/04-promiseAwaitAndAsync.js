// async -> obliga a que una funcion retorna una promesa
// awaut -> espera el resultado de una promesa y se peude trabajar con ese resultado

async function promiseWithAwaitAndAsync() {
    const promise = new Promise((resolve) => {
        resolve('Promise with await');
    });

    console.log(await promise);
}

promiseWithAwaitAndAsync();