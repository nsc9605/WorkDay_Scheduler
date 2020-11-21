// Declaration of elements/classes
const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");
const description = $(".description");
const hourTask = $("id");
const userText = $(".hour-task-text");


// Set current time in header when application is opened
$(document).ready(function () {
  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));

  var hours = today.hours();
  console.log(hours);
});

var parent = $(this).parents(".row");
var timeId = parseInt(parent.attr("id"));
var currentHour = parseInt(moment().format("H"));

// set variable for current hour for color coding purposes
let index = 0;

console.log(timeBlock);

timeBlock.each(function () {

    var parent = $(this).parents(".row");
    var timeId = parseInt(parent.attr("id"));
    var currentHour = parseInt(moment().format("H"));

    if (timeId < currentHour) {
      $(this).addClass("past");

    } else if (timeId === currentHour) {
        $(this).removeClass("past");
      $(this).addClass("present");
      
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
    $(this).addClass("future");
  }}
);



$(".save").on("click", saveBtn)
function saveBtn() {
  console.log($(this));
}

$(".save").on("click", function() {
     // the save button we are clicking on
     console.log($(this))
   
    var userText = $("#hour-task-text").val();
    console.log(userText);

    if(!localStorage.getItem(userText)) {
       localStorage.setItem(userText, JSON.stringify(userText));
    }
    //  // use jQuery to find this is hour
     var hourTask = $(this).attr("id").val();
    // // is this value correct?
    // console.log(hourTask)

    //  // use jQuery to find this is text content
    // // <- need to get the text content from here
     var text = $(this).siblings("hour-task").val(); 
        console.log(text)
   
// don't do this yet until you know we're doing the above correctly
localStorage.setItem(hourTask, userText);
localStorage.setItem(hourTask, JSON.stringify(text));
     // send it to localStorage
     // localStorage.setItem(hourTask, text)
   
   })

// function hourTask(text) {

// }
// function saveBtn(event) {
//     console.log(event.target);
//     localStorage.setItem("text", text);
// }
// // renderLastRegistered to keep information
// function renderTasks ()


// save to local storage


// $("button").on("click", save);
// function save() {
//     // console.log($(this).siblings(textarea).val());
// localStorage.setItem("text", JSON.stringify(text));
// )