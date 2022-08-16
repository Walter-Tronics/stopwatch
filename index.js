window.onload=()=>{

//setting variables
let hour = 00,
min = 00,
sec = 00,
ms = 00,
start = document.querySelector('#start'),
stop = document.querySelector('#stop'),
reset = document.querySelector('#reset'),
interval;

//setting the count function
function count(){
    //incrementing the miliseconds
    ms++;
    //if the miliseconds are greater than 99, reset to 0 and increment the seconds
    if (ms==100) {
        //incrementing the seconds
        sec++;
        //reset the miliseconds to 0
        ms=0;
    }
    //if the seconds are greater than 59, reset to 0 and increment the minutes
    if (sec==60) {
        //incrementing the minutes
        min++;
        //reset the seconds to 0
        sec=0;
    }
    //if the minutes are greater than 59, reset to 0 and increment the hours
    if (min==60) {
        //incrementing the hours
        hour++;
        //reset the minutes to 0
        min=0;
    }
    if (ms<10) {ms="0"+ms;}
    document.querySelector('#count').innerHTML=ms;
    document.querySelector('#sec').innerHTML=sec;
    document.querySelector('#min').innerHTML=min;
    document.querySelector('#hour').innerHTML=hour;
}
start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(count,10);
}
stop.onclick = function(){
    clearInterval(interval);
}
reset.onclick = function(){
    clearInterval(interval);
    hour=0;
    min=0;
    sec=0;
    ms=0;
    document.querySelector('#count').innerHTML=ms;
    document.querySelector('#sec').innerHTML=sec;
    document.querySelector('#min').innerHTML=min;
    document.querySelector('#hour').innerHTML=hour;
}
}