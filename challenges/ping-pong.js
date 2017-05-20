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

// YOUR CODE HERE


//first helper function - will return the index of the steps object within the given array:
function indexOfNotNull(arr) {
  let Idx = arr.findIndex(function(el, idx) {
    return (el !== null);
  });
  return Idx;
}

//second helper function - will grab the current step count as per the object with "steps" key:
function currStepCount(arr) {
  let targetIdx = indexOfNotNull(arr);
  let stepCount = arr[targetIdx].steps;
  return stepCount;
}

//third helper function - will return a boolean, true will make pingPong go right in function below,
// false will make pingPong go left in function below:
function rightOrLeft(arr) {

}



function pingPong(arr) {

  let currIdx = indexOfNotNull(arr);
  let stepNum = currStepCount(arr);

  if (rightOrLeft()) {
    /*  move steps object 1 index to the right & arr[newIdx].steps +=1  */
  } else {
    /*  move steps object 1 index to the left & arr[newIdx].steps +=1  */
  }


  return arr;
}

var table = [null, null, null, {steps: 9}, null, null, null];
//console.log(pingPong(table));

console.log(currStepCount(table));
