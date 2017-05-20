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
function daysUntilDate(str) {
  let targetDate = Date.parse(str);
  let today = Date.now();
  let diff = (targetDate - today);

  return `${Math.floor(diff/86400000)}`;
}
let sentenceForm = " days until your birthday!!";
//console.log(daysUntilDate("12/29/2017") + sentenceForm);

function dobThisYr(str) {
  let days = daysUntilDate(str);
  let decider = Math.round(Date.now()/86400000);

  console.log(days, decider);
}
dobThisYr("4/01/1975");

function birthdayReminder(arr) {
  var results = [];

  for (var i in arr) {
    results.push(`${arr[i].name}s birthday is in ${daysUntilDate(arr[i].dob)} days!`);
  }
  return results;
}

let example1 = [
  {
    name: "Jack",
    dob: "10/31/2013"
  },
  {
    name: "Jill",
    dob: "4/01/1975"
  }
];
console.log(birthdayReminder(example1));
