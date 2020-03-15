$(document).ready(function() {
  let currentDayEl = $("#currentDay");
  let saveBtn = $(".saveBtn");
  let clearBtn = $(".clearBtn");
  let currentHour = moment().hours();

  currentDayEl.text(moment().format("llll"));

  let update = function() {
    currentDayEl.text(moment().format("llll"));
  };

  setInterval(update, 1000);

  $(".saveBtn").on("click", function() {
    let value = $(this)
      .siblings(".description")
      .val();
    let time = $(this)
      .parent()
      .attr("curHour");
    localStorage.setItem(time, value);
  });

  $("#timeblock-9 .description").val(localStorage.getItem("9"));
  $("#timeblock-10 .description").val(localStorage.getItem("10"));
  $("#timeblock-11 .description").val(localStorage.getItem("11"));
  $("#timeblock-12 .description").val(localStorage.getItem("12"));
  $("#timeblock-13 .description").val(localStorage.getItem("13"));
  $("#timeblock-14 .description").val(localStorage.getItem("14"));
  $("#timeblock-15 .description").val(localStorage.getItem("15"));
  $("#timeblock-16 .description").val(localStorage.getItem("16"));
  $("#timeblock-17 .description").val(localStorage.getItem("17"));

  $(".doneBtn").on("click", function() {
    let time = $(this)
      .parent()
      .attr("curHour");
    $(this)
      .siblings(".description")
      .val("");
    localStorage.removeItem(time);
  });

  function updateHours() {
    $(".time-block").each(function() {
      let hour = parseInt($(this).attr("curHour"));
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  updateHours();
  $("#clear").on("click", function() {
    localStorage.clear();
    window.location.reload();
  });
});
