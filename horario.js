const date = new Date();
let monthNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

var day = date.getDate();
var month = monthNumber[date.getMonth()]
var year = date.getFullYear();

if(String(day).length == 1){
    day = "0" + day;
}
if(String(month).length == 1){
    month = "0" + month;
}

var DateTime = day + "-" + month + "-" + year;

var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if(String(hour).length == 1){
    hour = "0" + hour;
}
if(String(minutes).length == 1){
    minutes = "0" + minutes;
}
if(String(seconds).length == 1){
    seconds = "0" + seconds;
}

var DateHour = hour + ":" + minutes + ":" + seconds;



document.write(DateTime);
document.write("<br>");
document.write(DateHour);
