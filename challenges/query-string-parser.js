/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

function parseQueryString(str) {

  // declare an empty object to hold the final result to return
  var result = {};
  // if the argument passed in was an empty string, just return the empty object
  if (str === "") {
    return result;
  }
  // split the string into an array of key-value pair strings
  strArr = str.split("&");
  // iterate through each key-value pair strings
  strArr.forEach(function(currentVal, index) {
    // split the string into an array with the key and value (key at index 0, value at index 1)
    currentVal = currentVal.split("=");
    // update/add to the object with the kay and value
    result[`\"${currentVal[0]}\"`] = currentVal[1].toString();
  })
  // return the object
  return result;

}
