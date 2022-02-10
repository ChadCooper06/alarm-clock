
function updateTime() {
    const date = new date;
}

const hour = formatTime(date.getHours());
const minutes = formatTime(date.getMinutes());
const seconds = formatTime(date.getSeconds());

function formatTime(time) {
    if (time < 10) {
        return 0 + time;
    }
    return time;
} 

function setAlarm(value) {
    setAlarm = value;
}

setInterval(updateTime, 1000);
