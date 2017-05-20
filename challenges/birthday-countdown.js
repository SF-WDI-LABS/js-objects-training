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
/*
Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
returns the number of days (integer) between today and that date. Please use the built in
Javascript `Date` type in your solution.
*/

function daysUntilDate(futureDate) {
  //convert string to date
  var dateToInteger = Date.parse(futureDate);
  var todaysDate = new Date();
  var todaysDateInteger = Date.parse(todaysDate)
  var integerDifference = dateToInteger - todaysDateInteger;
  var seconds = Math.floor(integerDifference / 1000);
  var minutes = Math.floor( seconds / 60 );
  var hours = Math.floor( minutes / 60 );
  var days = Math.floor( hours / 24 );
  return days;

}

daysUntilDate("08/01/2017");
