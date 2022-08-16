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
    //if miliseconds are less than 10, add a 0 to the front of the string
    if (ms<10) {ms="0"+ms;}
    //append the miliseconds, seconds, minutes and hours to the html
    document.querySelector('#count').innerHTML=ms;
    document.querySelector('#sec').innerHTML=sec;
    document.querySelector('#min').innerHTML=min;
    document.querySelector('#hour').innerHTML=hour;
}
//start the count function
start.onclick = function(){
    //clear the interval if it is already running
    clearInterval(interval);
    //set the interval to the count function
    interval = setInterval(count,10);
}
//stop the count function
stop.onclick = function(){
    //clear the interval
    clearInterval(interval);
}
//reset the count function
reset.onclick = function(){
    //clear the interval
    clearInterval(interval);
    //reset the variables to 0
    hour=0;
    min=0;
    sec=0;
    ms=0;
    //append the variables to the html
    document.querySelector('#count').innerHTML=ms;
    document.querySelector('#sec').innerHTML=sec;
    document.querySelector('#min').innerHTML=min;
    document.querySelector('#hour').innerHTML=hour;
}
}