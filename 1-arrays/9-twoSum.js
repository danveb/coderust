// Two Sum 
// given an array of integers and a value, determine if two integers in the array sum up to the value
// return true if sum exists, return false otherwise 

// nums = [5, 7, 1, 2, 8, 4, 3]
// val = 3 
// output = true

// Brute Force
// - use a 2 pointer approach where we check for the sum of nums[i] + nums[j]
// - if this equals to val? we return true else false 

// Time: O(n^2) as we iterate over input array twice 
// Space: O(1) 

function findSumOfTwo(nums, val) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === val) {
        return true
      }
    }
  }
  return false; 
}

// Optimal
// - use a hashmap to store key/value pairs inside 
// - we can check for "difference" between val and current element we see on array

// Time: O(n) where n is length of input array
// Space: O(1) 

function findSumOfTwo(nums, val) {
  const hashmap = new Map();
  for(let i = 0; i < nums.length; i++) {
    let difference = val - nums[i]; 
    // check in our hashmap
    if(hashmap.has(difference)) {
      return true 
      // return [hashmap.get(difference), i]
    } else {
      hashmap.set(nums[i], i)
    }
  }
  return false; 
}

console.log(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 12)) // true 