/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysUntilDate(string) {
    var date = Date.parse(string);
    var today = Date.now();
    return ((date - today)/(1000*60*60*24)); // source to convert time: https://swizec.com/blog/a-day-is-not-606024-seconds-long/swizec/6755
}

function formatDate(dateString) {
    var today = new Date();
    var dateArray = dateString.split("/")
    // add one since returns the month from 0-11 & not 1-12
    var monthToday = (today.getMonth() + 1);
    var dateToday = (today.getDate());
    var yearToday = (today.getFullYear());

}
