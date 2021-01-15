# Daily Calendar
## Description
Simple calendar application that allows a user to save events for each hour of the day.

When the user opens the page, a daily planner is displayed with hourly time blocks from 8 AM to 4 PM. The current date is displayed at the top, and each time block is color-coded to indicate whether it is in the past, present, or future. When the user clicks on a time block, they can enter an event for that hour. If the user clicks on the save button for a time block, that event is saved in local storage. When the user refreshes the page, the saved events are displayed. Any events that have not been saved do not persist.

The current hour is only updated when the page is loaded or refreshed. A simple idea for further development would be to use a timer to update the current hour periodically if the user leaves the page open throughout the day. The time blocks for standard business hours are hard coded. A more complex idea for further development would be to generate the time blocks dynamically and allow the user to choose the work hours.

Deployed at [GitHub Pages](https://danielryangreen.github.io/daily-calendar/)

See the repo at [Github](https://github.com/danielryangreen/)
## Installation
Open __index.html__ in your favorite browser!

View the code in your favorite text editor. I suggest VS Code.
## Usage
Here is a mock-up that demonstrates the application functionality.

![animation of daily planner](Assets/05-third-party-apis-homework-demo.gif)
## Credits
The following resources were used in this project:

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [jQuery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)

Starter code and mock-up animation were provided by [Trilogy Education Services](https://trilogyed.com/)
## License
MIT License