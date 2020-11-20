// Declaration of elements/classes
const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");

// Set current time in header when application is opened
$(document).ready(function () {
    var today = moment();
    $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));

    var hours = today.hours();
    console.log(hours);  
})


// set variable for current hour for color coding purposes
var currentHour = moment().format('H');
console.log(currentHour);

let index = 0;

console.log(timeBlock);

// function to change color of textarea based on current time of the day
timeBlock.each(function(index, value) {
    console.log(`div${index}: ${this.id}`);

    // for (index = 0; index <= timeBlock.length; index++) {
        // console.log(index)
        var id = "hour" + index;
        // var timeBlock = $(id)
        // console.log(index)
        // var id = "hour" + index;
        if (index < currentHour) {
            $(this).addClass("past");
        }
        else if (index > currentHour) {
            $(this).addClass("present");
        }
        else (index == currentHour) 
            $(this).addClass("future");
}       
)
// save to local storage
$("button").on("click", save)

function save() {
    console.log($(this).siblings(textarea).val());
localStorage.setItem("text", JSON.stringify(text));
}


// add event listeners

// Function to save typed information