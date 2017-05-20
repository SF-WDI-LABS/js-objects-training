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

// YOUR CODE HERE

function parseQString(str) {
  let resultObj = {};

  if (str.indexOf("&") === - 1) {
    let strSplit = str.split("=");
      resultObj[strSplit[0]] = strSplit[1];
  } else {
    keyValPairs = str.split("&");
    for (let i =0; i < keyValPairs.length; i++) {
      let keyVal = keyValPairs[i].split("=");
      resultObj[keyVal[0]] = keyVal[1];
    };
  }
  return resultObj;
}
//console.log(parseQString("a=apple&b=beet&b=blueberry&c=&d=10"));

//Mega Bonus:
function reverseParseQString(obj) {
  var keys = Object.keys(obj);
  var valueArray = [];

  for (var i in obj) {
    valueArray.push(obj[i]);
  }
  var resultArr = keys.map(function(el, idx) {
    return el + "=" + valueArray[idx];
  });
  return "'" + resultArr.join("&") + "'";
}

var o = {first: "alpha", last: "omega"}
console.log(reverseParseQString(o));
