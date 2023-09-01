// Async

const clock = () => {
    const time = new Date();
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}

setInterval(clock, 1000);