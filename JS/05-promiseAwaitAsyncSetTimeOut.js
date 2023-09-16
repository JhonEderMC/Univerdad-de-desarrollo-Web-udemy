async function functionPromiseWithAsyncSetTimeout() {
    const promise = new Promise((resolve) => {
        setTimeout(()=> resolve('Promise with await and async'), 3000)
    });
    console.log(await promise);
}

functionPromiseWithAsyncSetTimeout();