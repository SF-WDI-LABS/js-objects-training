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
  // declare an empty array which will store the counts of each unique character
  var counts = [];
  // remove spaces, special characters, and punctuation
  str = str.replace(/\W/gi,"");
  // convert the string to lowercase
  str = str.toLowerCase();
  // split the string into an array of single characters
  strArr = str.split("");
  // get a new array with only the unique characters in the string
  var strArrUnique = strArr.filter(function(item, pos) {
    return strArr.indexOf(item) == pos;
  })
  // iterate through the unique array and save the counts of each letter
  for (var i = 0; i < strArrUnique.length; i++) {
    var count = strArr.filter(function(element) {
      return (element === strArrUnique[i]);
    }).length
    // push the count for this element into the counts array
    counts.push(count);
  }
  // declare an empty string which will contain the formatted string (as object)
  var returnStr = "";
  // iterate through the unique array
  for (var i = 0; i < strArrUnique.length; i++) {
    // prior to the first character, add the opening curly bracket and a new line
    if (i === 0) {
      returnStr = returnStr.concat("{\n");
    }
    // add a line with the character and the count e.g.:  p: 2
    returnStr = returnStr.concat(`  \"${strArrUnique[i]}\": ${counts[i]}`);
    // if this is the last character, end the string with a new line and closing curly bracket, otherwise add a comma and a new line
    if (i === strArrUnique.length - 1) {
      returnStr = returnStr + "\n}";
    } else {
      returnStr = returnStr + ",\n";
    }
  }
  // return the final, formatted new string
  return returnStr;
}


console.log(letterCount("bills#$%#$__  Schuetzle!!!"));
