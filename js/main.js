const display = document.getElementById("alarmClock");

function updateTime() {

    let date = new Date ();

    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    const period = "AM";
    if (hours == 0) hours = 12;
    
    if (hours > 12) {
        hours = hours - 12;
        period = "PM";
    }

    display.innerText = `${hours} : ${minutes} : ${seconds} : ${period}`;
    
    setInterval(updateTime, 1000);

}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}; 

function setAlarm(value) {
    setAlarm = value;
};

function endAlarm() {
};

alarmClock();
