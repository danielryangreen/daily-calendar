$(document).ready(function() {

  // global variables
  
  // get current date and time
  var timeNow = moment();
  var date = timeNow.format("dddd, MMMM DD, YYYY");
  // var hour = timeNow.format("HH");
  var hour = "12";
  console.log(hour);
  
  // get reference to each element
  $("#currentDay").text(date);
  
  // add class for past, present, future
  $("textarea").addClass(function() {
    var dataHour = this.getAttribute("data-hour");
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
  
  // enter or edit event in time block
  
  // listen for button and save event in local storage

});