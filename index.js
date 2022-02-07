var hour = 00;
var min = 00;
var sec = 00;
var ms = 00;
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var reset = document.querySelector('#reset');
var interval;
function count(){
    ms++;
    if (ms==100) {
        sec++;
        ms=0;
    }
    if (sec==60) {
        min++;
        sec=0;
    }
    if (min==60) {
        hour++;
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