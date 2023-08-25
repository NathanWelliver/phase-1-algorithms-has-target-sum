function hasTargetSum(array, target) {
  // Write your algorithm here
  //Loop through the array using tow pointers
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //if the sum of the current pair equals the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  //if no pair found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity is 0(n^2), where n is the length of the array.
*/

/* 
  Add your pseudocode here
  1. loop through the array using two pointers
  2. for each pair of elements, check if their sum equals the target
  3. if found, return true
  if no pair found, return false
*/

/*
  Add written explanation of your solution here
  This function uses a nested loop to iterate through all possible pairs of numbers in the array.
  It checks if the sum of the current pair equals the targetsum. If such a pair is found,
  it returns true. If no such pair is found, it returns false.
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
