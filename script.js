$(document).ready(function() {

  // global variables
  
  // get current date and time
  var timeNow = moment();
  var date = timeNow.format("dddd, MMMM DD, YYYY");
  var hour = timeNow.format("HH");
  alert(hour);
  
  // get reference to each element
  $("#currentDay").text(date);
  
  // display time blocks for standard business hours (use 8 AM to 5 PM)
  
  // add class for past, present, future
  
  // get saved events from local storage
  
  // display events in time blocks
  
  // enter or edit event in time block
  
  // listen for button and save event in local storage

});