var time = 0;
var running = false;
var interval;

document.getElementById("startstop").onclick = function() {
    if(!running) {
        startTimer();
        running = true;
    }
    else {
        pauseTimer();
        running = false;
    }
} 

function startTimer() {
    interval = setInterval(function() {
        time++;
        document.getElementById("timer").innerHTML = formatTime(time);
    }, 1000);
    document.getElementById("startstop").innerHTML = "Pause";
}

function pauseTimer() {
    clearInterval(interval);
    document.getElementById("startstop").innerHTML = "Start";
}

document.getElementById("reset").onclick = function() {
    formatTime(time);

    clearInterval(interval);
    time = 0;
    document.getElementById("timer").innerHTML = formatTime(time);
    
    if(document.getElementById("startstop").innerHTML == "Pause") {
        document.getElementById("startstop").innerHTML = "Start";
        running = false;
    }
}

function formatTime(time) {
    var hours, minutes, seconds = "00";
    
    if(time >= 60) {
        if(time >= 3600) {
            hours = Math.floor(time / 3600).toString();
            minutes = Math.floor((time - (hours * 3600)) / 60).toString();
            seconds = (time - (hours * 3600) - (minutes * 60)).toString();
        }
        else {
            hours = "00";
            minutes = Math.floor(time / 60).toString();
            seconds = (time - (minutes * 60)).toString();
        }
    }
    else {
        hours = "00";
        minutes = "00";
        seconds = time.toString();
    }

    if(hours.length == 1) { hours = "0" + hours; } 
    if(minutes.length == 1) { minutes = "0" + minutes; } 
    if(seconds.length == 1) { seconds = "0" + seconds; } 

    return (hours + ":" + minutes + ":" + seconds);
}
