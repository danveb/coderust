// Longest Consecutive Sequence 
// given an unsorted array of integers "nums", return length of longest consecutive elements
// write an O(n) algorithm 

// nums = [100, 4, 200, 1, 3, 2]
// output = 4; [1, 2, 3, 4] 

// nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] 
// output = 9; [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Brute Force
// - manually sort input array -> O(n log n) 
// - initialize currentMax at 1
// - initialize longestMax at 1
// - iterate over input array (i at 1 until end) 
// - check: if current element nums[i] !== nums[i - 1] for duplicates
// - check: if current element nums[i] === nums[i - 1] + 1 for current > prev 
// - increase currentMax by 1
// - else: 
// - set longestMax as MAX(longestMax, currentMax) 
// - reset currentMax back to 1
// - return MAX (longestMax, currentMax) 

// Time: O(n log n) where we perform a sort; O(n) for linearly checking consecutives => O(n log n) 
// Space: O(1) 

function longestConsecutive(nums) {
  // edge case: if nums array is empty there's no consecutive
  if(nums.length === 0) return 0
  // initialize currentMax, longestMax at 1
  let currentMax = 1; 
  let longestMax = 1; 
  // manually sort nums array in ascending order -> O(n log n) 
  nums.sort((a, b) => a - b); 
  for(let i = 1; i < nums.length; i++) {
    // check for duplicates with previous element 
    if(nums[i] !== nums[i - 1]) {
      // check if current element > previous element 
      if(nums[i] === nums[i - 1] + 1) {
        currentMax += 1
      } else {
        longestMax = Math.max(longestMax, currentMax); 
        // reset current back to 1
        currentMax = 1; 
      }
    }
  };
  return Math.max(longestMax, currentMax); 
}; 

// ========================================================================================

// Optimal
// - use a hashset to store all elements from nums array without SORTING 
// - initialize hashset with nums array 
// - initialize max at 0 
// - iterate over elements OF hashset 
// - check: if hashset DOES NOT HAVE element - 1 
// - initialize currentNum as current element 
// - initialize currentMax to 1
// - keep looping while hashset HAS current element + 1 (consecutive) 
// - increase currentNum by 1
// - increase currentMax by 1
// - set currentMax as MAX(currentMax, max) 
// - return max 

// Time: O(n) where n is length of input array
// Space: O(n) where we use a hashset to store all elements proportional to size of input array

function longestConsecutive(nums) {
  // edge case: if nums array is empty return 0 consecutives
  if(nums.length === 0) return 0;
  const hashset = new Set(nums) 
  let maxConsecutive = 0; 
  // iterate over element OF hashset
  for(let el of hashset) {
    // check: if hashset DOES NOT HAVE el - 1 
    if(!hashset.has(el - 1)) {
      let current = el; 
      let currentConsecutive = 1; 

      // keep looping while hashset HAS current + 1 
      while(hashset.has(current + 1)) {
        current++
        currentConsecutive++ 
      }; 
      // record maxConsecutive
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive); 
    };
  };
  return maxConsecutive; 
}