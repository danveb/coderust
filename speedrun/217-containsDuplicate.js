// Contains Duplicate
// given integer array "nums", return true if any value appears twice in array
// return false if every element is distinct 

// nums = [1, 2, 3, 1] 
// output = true 

// Brute Force 
// - use a 2 pointer approach where we iterate the array twice (i, j) 
// - if pointer [j] === pointer [i] we know it's a duplicate so true 
// - return false if every element is distinct 

// Time: O(n^2) we use a nested loop; for each element in the array we iterate over up to "n" other elements 
// Space: O(1) we don't incur extra memory 

function containsDuplicate(nums) {
  // edge case: if nums array is empty? return false 
  if(nums.length === 0) return false; 
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] === nums[j]) return true; 
    }
  }; 
  return false; 
}

// Optimal 
// - use a hashmap where we store all the values 
// - iterate over input array once (i at 0 until end)
// - check: if current element is present in hashmap 
// - return true 
// - return false if we every element is distinct 

// Time: O(n) 
// Space: O(n) we use a hashmap 

function containsDuplicate(nums) {
  const hashmap = new Map(); 
  for(let i = 0; i < nums.length; i++) {
    // check: if hashmap HAS current element 
    if(hashmap.has(nums[i])) {
      // return true
      return true; 
    } else {
      // else we'll add it to hashmap 
      hashmap.set(nums[i]); 
    };
  }; 
  return false; 
}

// Another optimal? 
// - use a hashset and add each element to the Set() 
// - compare length of hashset and original nums array
// -- if length are SAME -> FALSE because all elements are distinct
// -- if length are NOT SAME -> TRUE because there's some duplicate

function containsDuplicate(nums) {
  const hashset = new Set(); 
  for(let i = 0; i < nums.length; i++) {
    hashset.add(nums[i]); 
  }; 

  // check the length between nums array and hashset 
  if(hashset.size === nums.length) {
    return false; 
  } else {
    return true; 
  }
}