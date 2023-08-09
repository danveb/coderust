// Two Sum 
// given an array "nums" and a "target", return indices of two numbesr such that they add up to target 
// assume there's only 1 solution, and we can't use same element twice 

nums = [2, 7, 11, 15] 
target = 9
output = [0, 1] 

// Brute Force
// - use a nested for loop to look for nums[i] + nums[j] === target 
// - push the output with [i, j]

// Time: O(n^2) as we use a nested for loop to iterate each element, while second loop iterates elements to right of current element 
// Space: O(n) we use an output [] 

// function twoSum(nums, target) {
//   if(nums.length === 0) return []; 
//   const output = [];
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       // check: if nums[i] + nums[j] === target 
//       if(nums[i] + nums[j] === target) {
//         output.push(i, j)
//       }
//     }
//   }; 
//   return output; 
// }

// Optimal
// - use a hashmap to store elements (KEY: element, VALUE: INDEX) 
// - iterate over input array once 
// - initialize difference = target - current element 
// - check: if hashmap has difference? we'll return its index 
// - check: if hashmap does NOT have difference? we'll set current element with its index

// Time: O(n) where n is length of input array
// Space: O(n) we use a hashmap 

function twoSum(nums, target) {
  if(nums.length === 0) return []; 
  const hashmap = new Map(); 
  for(let i = 0; i < nums.length; i++) {
    // initialize difference and look 
    let difference = target - nums[i]; 
    // check: if hashmap HAS difference
    if(hashmap.has(difference)) {
      return [hashmap.get(difference), i]
    } else {
      hashmap.set(nums[i], i)
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] 