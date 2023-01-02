//creating function and storing time values
function time(){
var d=new Date();
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
var session = document.getElementById("ampm");

//AM/PM
if(h>= 12){
    session.innerHTML='PM'
} else {
    session.innerHTML='AM'
}

//railway to normal Time
if(h>=12){
    h-=12
}

// adding 0
if(h<10){
    h='0'+h
}
if(m<10){
    m='0'+m
}
if(s<10){
    s='0'+s
}

//fetching value to html
document.getElementById("hour").textContent = h;
document.getElementById("minute").textContent = m;
document.getElementById("second").textContent = s;
}
setInterval(time,1000)

