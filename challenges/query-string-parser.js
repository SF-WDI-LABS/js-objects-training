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
  // split the string into an array of key-value pair strings
  strArr = str.split("&");
  //console.log(strArr);
  // declare an empty string that will hold the completed string (formatted as object)
  var returnStr = "";
  // add the opening curly bracket
  returnStr = returnStr.concat("{");
  // iterate through each key-value pair strings
  strArr.forEach(function(currentVal, index) {
    // for the first element, add a new line
    if (index === 0) {
      returnStr = returnStr.concat("\n");
    }
    // split the string into an array with the key and value (key at index 0, value at index 1)
    currentVal = currentVal.split("=");
    // add a line formatted as "key": "value"
    returnStr = returnStr.concat(`\"${currentVal[0]}\": \"${currentVal[1]}\"`);
    // for the last element, just add a new line, otherwise add both a comma and a new line
    if (index === strArr.length - 1) {
      returnStr = returnStr.concat("\n");
    } else {
      returnStr = returnStr.concat(",\n");
    }
  })
  // add the closing curly bracket
  returnStr = returnStr.concat("}");
  // return the final string as an object
  return returnStr;
}

var result = parseQueryString("first=alpha&last=omega");
console.log(JSON.parse(result));
//console.log(JSON.parse(result));
