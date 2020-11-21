// Declaration of elements/classes
const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");
const description = $(".description");



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
  for (i = 0; i < 9; i++) {
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
});


    localStorage.setItem("save", saveBtn);

//     var description = $(".description").val();
//     var rows = $(".row").value;
//     var hours = $(".hour").value;
    var text = $(".text").value;
    // var save = $(".save").value;
//     row.append(hours, text, save);
//     $(".container").append(row);
// })

$("button").on("click", saveBtn)

function saveBtn() {
    localStorage.setItem("text", text);
}


// // renderLastRegistered to keep information
// function renderTasks ()


// save to local storage


// $("button").on("click", save);
// function save() {
//     // console.log($(this).siblings(textarea).val());
// localStorage.setItem("text", JSON.stringify(text));
// }
