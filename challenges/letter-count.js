/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

function letterCount(str) {

  // declare an empty object to hold the final result to return
  var result = {};
  // declare an empty array which will store the counts of each unique character
  var counts = [];
  // update the string to remove spaces, special characters, and punctuation; and convert it to all lowercase
  str = str.replace(/\W/gi,"").toLowerCase();
  // split the string into an array of single characters
  strArr = str.split("");
  // filter the string to remove duplicates; store in a new array
  var strArrUnique = strArr.filter(function(item, pos) {
    return strArr.indexOf(item) == pos;
  })
  // iterate through the unique array to get the counts for each letter
  var count;
  for (var i = 0; i < strArrUnique.length; i++) {
    count = strArr.filter(function(element) {
      return (element === strArrUnique[i]);
    }).length
    // push the count for this element into the counts array
    counts.push(count);
  }
  // iterate through the unique array and store the key-value pairs in the object
  strArrUnique.forEach(function(currentVal, index) {
    result[currentVal] = counts[index];
  })
  // return the object as a string
  return JSON.stringify(result);

}
