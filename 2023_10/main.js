// 1. Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
    const newNonDuplicateArray = a.filter((item, index, self) => {
        return self.indexOf(item) === index;
    });
    return newNonDuplicateArray;
}
console.log(distinct([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]));


// Sample Test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("test", () => {
//     assert.deepEqual(distinct([1]), [1]);
//     assert.deepEqual(distinct([1,2]), [1,2]);
//     assert.deepEqual(distinct([1,1,2]), [1,2]);
//   });
// });

// 2. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if(name[0] === 'R' || name[0] === "r") {
        return `${name} plays banjo`
    }else {
        return `${name} does not play banjo`
    }
}

// test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
//     assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
//     })
//   })