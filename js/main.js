const display = document.getElementById('clock');
const audio = new Audio('https://onlineclock.net/audio/options/default.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {

    const date = new Date();

    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());


    display.innerText = `${hours}:${minutes}:${seconds}`;
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if (alarmTime) {

        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm Set');
        }
    }
}

function endAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm Off');
    }
}

setInterval(updateTime, 1000);
