// Three Sum 
// given an array of integers and a value, determine if there are any three integers in the array whose sum equals the given value 

// nums = [3, 7, 1, 2, 8, 4, 5] 
// target = 20
// output = true; 5 + 7 + 8

// Brute Force
// - use a 3 pointer approach (i, j, k) where we sum nums[i] + nums[j] + nums[k] to equal TARGET 
// - POTENTIAL SCENARIO: repeating characters that we may want to avoid
// - if sum === target return true 
// - return false 

// Time: O(n^3) where we use a 3 nested loop to iterate over input array
// Space: O(1) 

// function findSumOfThree(nums, target) {
//   // edge case: if nums array is empty there's no sum
//   // if(nums.length === 0) return false; 
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       for(let k = j + 1; k < nums.length; k++) {
//         let sum = nums[i] + nums[j] + nums[k]
//         if(sum === target) return true; 
//       }
//     }
//   }
//   return false; 
// }

// Better than Brute Force? 
// - manually sort in ascending order
// - POTENTIAL SCENARIO: repeating characters that we may want to avoid 

// Duplicate Check: make sure index is > 0 && current val is equal to previous val
// --> if(i > 0 && nums[i] === nums[i - 1]) continue the loop 
// --> if(j > i + 1 && nums[j] === nums[j - 1]) continue the loop
// --> if(k > j + 1 && nums[k] === nums[k - 1]) continue the loop 


// Time: O(n^3) -> O(n^3) for 3 nested loops + O(n log n) for manually sorting 
// Space: O(n) output array 

function findSumOfThree(nums, target) {
  // edge case: if nums array is empty return []
  if(nums.length === 0) return [];
  const triplets = []; 
  nums.sort((a, b) => a - b); 
  for(let i = 0; i < nums.length; i++) {
    // prevent duplicate when nums is SORTED: if current element === previous element we wan continue
    if(i > 0 && nums[i] === nums[i - 1]) continue; 
    for(let j = i + 1; j < nums.length; j++) {
      // prevent duplicate when nums is SORTED: if current element === previous element we wan continue
      if(j > i + 1 && nums[j] === nums[j - 1]) continue; 
      for(let k = j + 1; k < nums.length; k++) {
        // prevent duplicate when nums is SORTED: if current element === previous element we wan continue
        if(k > j + 1 && nums[k] === nums[k - 1]) continue; 
        let sum = nums[i] + nums[j] + nums[k]; 
        if(sum === target) {
          triplets.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return triplets; 
}

console.log(findSumOfThree([-1,0,1,2,-1,-4], 0))