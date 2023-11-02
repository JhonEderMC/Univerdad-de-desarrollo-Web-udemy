const showClock = () => {
    const clock = new Date();

    const htmlHour = document.getElementById('hour');
    htmlHour.innerHTML = `${formatHour(clock.getHours())} ${formatHour(clock.getMinutes())} ${formatHour(clock.getSeconds())}`;  

    const htmlDate = document.getElementById('date');
    htmlDate.innerHTML = `${clock.toDateString()}`
    
    console.log(clock.toDateString())

    console.log(document.getElementById('container').classList);
    document.getElementById('container').classList.toggle('animate');
    
}

const formatHour = (hour) => {
    return hour < 10 ? `0${hour}`: `${hour}`;
}


 setInterval(showClock, 1000);    
