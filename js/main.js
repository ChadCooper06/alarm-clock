
function updateTime() {

    document.getElementById("digital-clock");

    var date = new date;
    var merdian = "";

    if (hour >= 12) {
      meridian = "PM";  
    } else {
        meridian = "AM";
    }
}


var hour = formatTime(date.getHours());
var minutes = formatTime(date.getMinutes());
var seconds = formatTime(date.getSeconds());

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
updateTime();
