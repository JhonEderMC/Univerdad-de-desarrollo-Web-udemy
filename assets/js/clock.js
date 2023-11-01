const showClock = () => {
    const clock = new Date();

    const htmlHour = document.getElementById('hour');
    htmlHour.innerHTML = `${clock.getHours()} ${clock.getMinutes()} ${clock.getSeconds()}`;  

    const htmlDate = document.getElementById('date');
    htmlDate.innerHTML = `${clock.toDateString()}`
    
    console.log(clock.toDateString())
}


 setInterval(showClock, 1000);    
