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

function daysUntilDate(str) {
  // split the string into an array with the month, day, and year
  dateArr = str.split("/");
  // init a new Date object representing the date passed in
  var compareDate = new Date(dateArr[2], dateArr[0] - 1, dateArr[1]);
  console.log(compareDate);
  // use the getTime() method to get the number of milliseconds between 1970/01/01 and the date passed in
  var compareTimeInMs = compareDate.getTime();
  //console.log(compareTimeInMs);
  // get the number of milliseconds between 1970/01/01 and the current date (remove the time portion using the setHours method)
  var currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  var currentTimeInMs = currentDate.getTime();
  console.log(currentDate);
  // calculate the number of days between the current date and the date passed in
  var numDays = (compareTimeInMs - currentTimeInMs) / (1000 * 60 * 60 * 24);
  //console.log(numDays);
  console.log(`number of days until date: ${numDays}`);
  return Math.floor(numDays);

}

daysUntilDate("05/02/2017");

function birthdayReminder(arrayOfObjects) {
  // declare an empty array to hold the birthday reminder strings
  var bdayReminders = [];
  // iterate through the array of objects
  arrayOfObjects.forEach(function(currentVal) {
    // update the dob string with the current year
    var month = currentVal.dob.split("/")[0];
    var day = currentVal.dob.split("/")[1];
    var year = new Date().getFullYear();
    // increment the year by 1 if the birthday is before the current date
    var compareDate = new Date(`${month}/${day}/${year}`);
    var currentDate = new Date();
    if (compareDate < currentDate) {
      year++;
    }
    var newDOBString = `${month}/${day}/${year}`;
    console.log(newDOBString)
    // push the formatted and calculated reminder into the array
    bdayReminders.push(`${currentVal.name}'s birthday is in ${daysUntilDate(newDOBString)} days`);
  })
  // return the birthday reminders array
  return bdayReminders;
}



var testArr = [
  {
    name: "Jack",
    dob: "5/23/2014"
  },
  {
    name: "Jill",
    dob: "5/20/1975"
  }
]

console.log(birthdayReminder(testArr));
