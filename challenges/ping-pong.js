/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

function pingPong(arr) {

  // function to return the index in the array with the object (where the element is not null)
  function findNotNullIndex(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== null) {
        return i;
      }
    }
  }
  // get the position of the object in the array; store in a variable
  var currentPos = findNotNullIndex(arr);
  // get the steps property of the object; store in a variable
  var numSteps = arr[currentPos].steps;
  // calculate the number of "bounces" the ball has taken so far based on the number of steps and the length of the table / number of cells
  var bounces = Math.floor(numSteps / (arr.length - 1));
  // update the object to increment the number of steps
  arr[currentPos].steps += 1;
  // store the updated object in a new object
  var obj = arr[currentPos];
  // update the array
  // based on the number of bounces and the fact that there are two endpoints, we can determine the direction
  if (bounces % 2 === 0) {    // moving to the right
    arr[currentPos + 1] = obj;
  } else {                    // moving to the left
    arr[currentPos - 1] = obj;
  }
  arr[currentPos] = null;
  // return the updated array
  return arr;

}
