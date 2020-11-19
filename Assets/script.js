const rows = document.getElementsByClassName("row");
const hour = document.querySelector(".hour");
// const hourPast = document.querySelector(".past");
// const hourPresent = document.querySelector(".present");
// const hourFuture = document.querySelector(".future");
// const timeBlock = document.querySelector(".time-block");

// Set current time in header when application is opened
$(document).ready(function () {
    var today = moment();
    $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));

    var hour = today.hours();
    console.log(hours);
    
})
// set variable for current hour for color coding purposes
var currentHour = moment().format('H');
console.log(currentHour);

// function setColor(color) {}
var hourPast = hourPast < currentHour;
var hourPresent = currentHour;
var hourFuture = hourFuture > currentHour;

let i = 0;


// for loop for hours in the current work day
for (let i = 1; i <= 24; i++) {
    // console.log(i)
    var id = ".hour" + i;
    var timeBlock = $(id)
    if (i < currentHour) {
        timeBlock.addClass(hourPast)
    }
    else if (i > currentHour) {
        timeBlock.addClass(hourFuture)
    }
    else (i == currentHour) 
        timeBlock.addClass(hourPresent)
    }


// for (let hour = 0; hour < 24; hour++) {
//     const past = isPast(hour)
// }
// }


// function to test the hour

// if hour < now = future 

// 3 if / else arguments 