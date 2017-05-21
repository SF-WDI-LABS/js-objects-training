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

/* PSEUDOCODE

1.Separate keys from values using "="
2.Separate key value pairs "&" - maybe first?

*/

let newObj    = {}
let newArray  = []
let result    = []

function parseQueryString(x){
  let str = x.toLowerCase();

// SEPARATE KEY-VALUE PAIRS
  newArray = str.split(["&"]);
// ITERATE THROUGH THAT ARRAY TO...
  for (i = 0; i < newArray.length; i++) {
// SEPARATE KEYS & VALUES
    result = newArray[i].split(["="]);
    newObj[result[0]] = result[1];
  }
// RETURN NEW OBJECT WITH NEW KEYS AND PAIRS
  return(newObj);
};
