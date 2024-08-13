let clock = document.getElementById("clock");

function showTime () {
    let  time =new Date(),hours =time.getHours() ,minutes = time.getMinutes(), seconds = time.getSeconds();
    if (hours >12 ) {
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    clock.textContent =`${hours} : ${minutes} : ${seconds}`;
};

window.onload = function () {
    setInterval(showTime, 1000);
};