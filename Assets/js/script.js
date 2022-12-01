$(document).ready(function () {
  console.log("Ready!");
});

let now = moment().format("dddd, MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;
let currentHour = moment().format("HH");

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  function timeTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  $("#hour8 .description").val(localStorage.getItem("hour1"));
  $("#hour9 .description").val(localStorage.getItem("hour2"));
  $("#hour10 .description").val(localStorage.getItem("hour3"));
  $("#hour11 .description").val(localStorage.getItem("hour4"));
  $("#hour12 .description").val(localStorage.getItem("hour5"));
  $("#hour13 .description").val(localStorage.getItem("hour6"));
  $("#hour14 .description").val(localStorage.getItem("hour7"));
  $("#hour15 .description").val(localStorage.getItem("hour8"));
  $("#hour16 .description").val(localStorage.getItem("hour9"));
  $("#hour17 .description").val(localStorage.getItem("hour10"));

  timeTracker();
});
