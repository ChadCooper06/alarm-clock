const display = document.getElementById("digital-clock");

function updateTime() {

    let date = new date ();
    let meridian = "" ;

    if (hour >= 12) {
      meridian = "PM";  
    } else {
        meridian = "AM";
    }

    var hour = formatTime(date.getHours());
    var minutes = formatTime(date.getMinutes());
    var seconds = formatTime(date.getSeconds());

    display.innerText = `${hour} : ${minutes} : ${seconds} : ${meridian}`;    
}

setInterval(updateTime, 1000);

function formatTime(time) {
    if (time < 10) {
        return 0 + time;
    }
    return time;
} 

function setAlarm(value) {
    setAlarm = value;
}

function endAlarm() {
    
}

setAlarm.addEventListener('click', event => output.textContent = "Alarm set");
endAlarm.addEventListener('click', event => output.textContent = "Alarm ended");

updateTime();
