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

function todaysDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
  if(mm<10){
    mm='0'+mm;
  }
  var today = mm+'/'+dd+'/'+yyyy;
  return today;
}
//console.log(today());

function nextBirthday(str) {
  let today = todaysDate();
  let todayArray = today.split("/");
  let targetDate = str.split("/");
  let targetDateArr = [];
  targetDateArr[0] = targetDate[0];
  targetDateArr[1] = targetDate[1];

  let thisYear = todayArray[2];

  if ((parseInt(todayArray[0]) > parseInt(targetDateArr[0])) && (parseInt(todayArray[1]) >= parseInt(targetDateArr[1]))) {
    targetDateArr.push(parseInt(thisYear) + 1).toString();
  } else if (parseInt(todayArray[0]) > parseInt(targetDateArr[0])) {
    targetDateArr.push(parseInt(thisYear) + 1).toString();
  } else {
    targetDateArr.push(thisYear);
  }
  return targetDateArr.join("/");
}
//console.log(nextBirthday("04/01/1975"));

function birthdayReminder(arr) {
  let results = [];

  for (let i in arr) {
    let nextBDay = nextBirthday(arr[i].dob);
    results.push(`${arr[i].name}s birthday is in ${daysUntilDate(nextBDay)} days!`);
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
