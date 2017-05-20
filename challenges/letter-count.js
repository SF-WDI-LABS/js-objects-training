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

// YOUR CODE HERE

function letterCount(str) {
    // create object for letters and their count
    var output = {};
    // split string into an array and lowercase all letters to remove confusion between uppercase and lowercase counting of letters
    var strToArray = str.toLowerCase().split("");
    // create conditions to add an additional one if output object already has a letter
    strToArray.forEach(function(el) {
        if (output[el]) {
            output[el] += 1;
        // if not, add new letter to object with one
        } else {
            output[el] = 1;
        }
    });
    // returns object after it has been turned into an array
    return frequencyStat(output, str.length);
}
    // BONUS - return frequency
    function frequencyStat(object, length) {
        var letterArr = Object.keys(object);
        letterArr.forEach(function(letter) {
            object[letter] = (object[letter] / length);
        });
        return object;
    }
