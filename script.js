function myTime(){
    var myDate = new Date();
    var hour,minute = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes();
    var second = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds();
    var am_pm = (myDate.getHours() <= 12) ? "AM" : "PM";

    if(myDate.getHours() == 0){
        hour = 12;
    }
    else if(myDate.getHours() > 12){
        hour = myDate.getHours() - 12;
    }
    else{
        hour = myDate.getHours();
    }

    var currentHour = hour;
    var currentMinute = minute;
    var currentSecond = second;

    document.getElementsByClassName("hourSpan")[0].innerHTML = currentHour;
    document.getElementsByClassName("minuteSpan")[0].innerHTML = currentMinute;
    document.getElementsByClassName("secondSpan")[0].innerHTML = currentSecond;
    document.getElementsByClassName("am_pmSpan")[0].innerHTML = am_pm;

    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentDay = myDate.getDate();

    var currentDate = Days[myDate.getDay()]; //name of today
    var currentMonth = Months[myDate.getMonth()] + " " + currentDay; //name of this month & todays date
    
    document.getElementsByClassName("daynameSpan")[0].innerHTML = currentDate;
    document.getElementsByClassName("monthname_dateSpan")[0].innerHTML = currentMonth;


}
myTime();
setInterval(function(){
    myTime();
}, 1000);

