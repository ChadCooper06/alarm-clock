function digitalClock() {

    let date = new date ();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    let meridian = "AM";
    if (hour == 0) hour = 12;
    
    if (hour > 12) {
        hour = hour - 12;
        meridian = "PM";
    }


    let time = `${hour} : ${minutes} : ${seconds} ${meridian}`;    
    
    setInterval(digitalClock, 1000);
    document.getElementById("digitalClock").innertext = time;
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

setAlarm.addEventListener('click', event => output.textContent = "Alarm set");
endAlarm.addEventListener('click', event => output.textContent = "Alarm ended");

digitalClock();
