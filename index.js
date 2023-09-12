// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i === j) continue;
//       if (array[i] + array[j] === target) return true;
//     }
//   }
//   return false;
// }

function hasTargetSum(array, target) {
  let i = 0;
  let j = array.length - 1;
  array.sort((a, b) => a - b);
  while (i < j) {
    if (array[i] + array[j] === target) return true;
    array[i] + array[j] > target ? j-- : i++;
  }
  return false;
}

/* 
  Option 1: O(n ^ 2) => nested loop
  Option 2: O(n) => two non-nested iterators
*/

/* 
  Option 1: Use nested loops to check every pair;
  Option 2: Sort array from smallest to least, and use i and j variables to check pairs,
            incrementing and decrementing i or j based on sum > target
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
