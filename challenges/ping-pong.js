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

  //console.log(arr);
  //console.log(findNotNullIndex(arr));

  var currentPos = findNotNullIndex(arr);
  var numSteps = arr[currentPos].steps;

  //console.log(currentPos);
  //console.log(numSteps);

  // function to return the index in the array with the object / where the element is not null
  function findNotNullIndex(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== null) {
        return i;
      }
    }
  }

  // determine the direction the ball should be moving
  // each "bounce" will be in increments of three, or one minus the size of the array
  var bounces = Math.floor(numSteps / 3);

  //console.log(bounces);

  // increment the number of steps
  arr[currentPos].steps += 1;

  // store the object in a variable
  var obj = arr[currentPos];

  // depending on the number of bounces, we can figure out which way it is moving
  var direction;
  if (bounces % 2 === 0) {
    direction = "right";
    arr[currentPos] = null;
    arr[currentPos + 1] = obj;
  } else {
    direction = "left";
    arr[currentPos] = null;
    arr[currentPos - 1] = obj;
  }

  //console.log(`current position is ${currentPos}, number of bounces is ${bounces}, and we are moving to the ${direction}`);
  console.log(arr);


  // return the updated array
  return arr;

}

var table = [{steps: 6}, null, null, null];

for (var i = 0; i < 15; i++) {
  pingPong(table);
}
