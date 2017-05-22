/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's date of birth (dob), and returns an array of reminder messages (strings).

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
function daysUntilDate(dateString) {
    let today = new Date();
    let userDate = new Date(dateString);
    let timeDiff = today.getTime() - userDate.getTime();
	let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
	return dayDiff;
} 


function birthdayReminder(people) {
	outputMsg = [];
    people.forEach(function(person){
		outputMsg.push(`${person.name}'s birthday is in ${daysUntilDate(person.dob)} days.`);
	});
	return outputMsg;
} // returns an array of reminder messages (strings)

birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ])