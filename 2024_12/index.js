// Kata 8 kyu - Kwrite a function that takes an argument and returns the square of it.
// Write the "square"-function here

function square(num) {
  return num * num;
}

// Sample test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});


// Kata 7 kyu Testing 1-2-3

var number=function(array){
  return (
    array.map((line, index) => `${index + 1}: ${line}`)
  )
}

// Smaple test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                
  });
});


// Kata 8 kyu Keep up the hoop

function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

// Sample test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});

// LeetCode Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.
 

// Constraints:

// arr is a valid JSON array
// 0 <= arr.length <= 1000

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  if (this.length === 0) {
      return -1
  }
  return this[this.length-1]
};

// OR this solution -> return this[this.length - 1] || -1;

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/
