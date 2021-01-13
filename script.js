$(document).ready(function() {

  // global variables
  var event08 = "The quick brown fox jumps over the lazy dog";
  var event09 = "The quick brown fox jumps over the lazy dog";
  var event10 = "The quick brown fox jumps over the lazy dog";
  var event11 = "The quick brown fox jumps over the lazy dog";
  var event12 = "The quick brown fox jumps over the lazy dog";
  var event13 = "The quick brown fox jumps over the lazy dog";
  var event14 = "The quick brown fox jumps over the lazy dog";
  var event15 = "The quick brown fox jumps over the lazy dog";
  var event16 = "The quick brown fox jumps over the lazy dog";
  
  // get current date and time
  var timeNow = moment();
  var date = timeNow.format("dddd, MMMM DD, YYYY");
  // var hour = timeNow.format("HH");
  var hour = "12";
  console.log(hour);
  
  // get reference to each element
  $("#currentDay").text(date);
  
  // add classes for past, present, future
  $("textarea").addClass(function() {
    var dataHour = $(this).attr("data-hour");
    if (dataHour < hour) {
      return "past";
    }
    else if (dataHour == hour) {
      return "present";
    }
    else if (dataHour > hour) {
      return "future";
    }
  });
  
  // get saved events from local storage
  
  // display events in time blocks
  $("#event08").text(event08);
  $("#event09").text(event09);
  $("#event10").text(event10);
  $("#event11").text(event11);
  $("#event12").text(event12);
  $("#event13").text(event13);
  $("#event14").text(event14);
  $("#event15").text(event15);
  $("#event16").text(event16);
  
  // listen for button and save event in local storage
  $("button").click(function() {
    console.log($(this).prev().attr("data-hour"));
    console.log($(this).prev().val());
  });

});