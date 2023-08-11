// Longest Consecutive Sequence 
// given an unsorted array of integers "nums", return length of longest consecutive elements
// write an O(n) algorithm 

// nums = [100, 4, 200, 1, 3, 2]
// output = 4; [1, 2, 3, 4] 

// nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] 
// output = 9; [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Approach
// - initialize a hashSet to take advantage of super quick Lookups O(1) 
// - include nums array to the Set 
// - initialize max at 0 
// - iterate each element of the set 
// -- check: if set has num-1 we continue loop 
// - initialize current as current number 
// - initialize currentMax as 1 
// -- keep looping while our set has current + 1 
// --- increase counter++ 
// -- update max as Math.max(max, currentMax) 
// - return max; 

// Time: O(n) 
// Space: O(n) 

function longestConsecutive(nums) {
  // base case of empty array 
  if(nums.length === 0) return 0 
  
  // initialize a new Set(from nums array) 
  const set = new Set(nums) 
  
  // initialize max at 0 
  let max = 0
  
  // iterate over each element of the set 
  for(let num of set) {
    // if set does NOT have the previous num 
    if(!set.has(num-1)) {
      let current = num 
      let currentMax = 1
      
      while(set.has(current + 1)) {
      current++ 
      currentMax++ 
      }
      // check if max OR currentMax is greater 
      max = Math.max(max, currentMax)    
    }
  }
  return max; 
}