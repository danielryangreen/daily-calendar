$(document).ready(function() {

  // get current date and time
  var timeNow = moment();
  var date = timeNow.format("dddd, MMMM DD, YYYY");
  $("#currentDay").text(date);
  var hour = timeNow.format("HH");
  // var hour = "12";
  console.log(hour);
  
  
  // add class for past, present, future
  $("textarea").addClass(function() {
    var index = $(this).attr("data-index");
    if (index < hour) {
      return "past";
    }
    else if (index == hour) {
      return "present";
    }
    else if (index > hour) {
      return "future";
    }
  });
  
  // get saved events from local storage
  function init() {
    $("textarea").text(function() {
      var index = $(this).attr("data-index");
      var event = localStorage.getItem(index);
      return event;
    });
  }

  init();
  
  // listen for button and save event in local storage
  $("button").click(function() {
    var key = ($(this).prev().attr("data-index"));
    var value = ($(this).prev().val());
    localStorage.setItem(key, value);
    console.log(localStorage);
  });

});