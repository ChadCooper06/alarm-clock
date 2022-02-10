const display = document.getElementById("alarmClock");

function updateTime() {

    let date = new Date ();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const period = "AM";
    if (hour == 0) hour = 12;
    
    if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }

    display.innerText = `${hour} : ${minutes} : ${seconds} : ${period}`;
    
    setInterval(updateTime, 1000);

};


function formatTime(time) {
    if (time < 10) {
        return 0 + time;
    }
    return time;
}; 

function setAlarm(value) {
    setAlarm = value;
};

function endAlarm() {
};

alarmClock();
