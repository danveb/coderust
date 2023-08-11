// Search a Rotated Sorted Array 
// given array "nums" sorted in ascending order, and "target"
// return index of "target" if present in nums array
// return -1 if NOT present 

// nums = [4, 5, 6, 7, 0, 1, 2] 
// target = 0
// output = 4 

// nums = [4, 5, 6, 7, 0, 1, 2] 
// target = 3
// output = -1

// Brute Force
// - iterate linearly over input array
// - check: if nums[i] === target we can return its index
// - else return -1 if not in nums array 

// Time: O(n) 
// Space: O(1) 

function search(nums, target) {
  // edge case: if nums array is empty there's no target to be searched
  if(nums.length === 0) return -1; 
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) return i; 
  };
  return -1; 
}

// Optimal
// - perform modified binary search where we check for nums[mid] === target
// - check: is array SORTED? 
// -- if(nums[mid] < nums[right]) -> we know it's RIGHT SIDE SORTED
// -- if(nums[left] < nums[mid]) -> we know it's LEFT SIDE SORTED

// Time: O(log n) where input size shrinks by iteration
// Space: O(1) 

function search(nums, target) {
  if(nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2); 
    // check: if nums[mid] === target we have found it 
    if(nums[mid] === target) return mid; 
    // check: is RIGHT SIDE SORTED? M to R; 1 - 4 
    if(nums[mid] < nums[right]) {
      // check: is target present between nums[mid] and nums[right]? 
      if(nums[mid] <= target && target <= nums[right]) {
        // check right side first 
        left = mid + 1 
      } else {
        right = mid - 1
      }
    // check: is LEFT SIDE SORTED? L to M; 5 - 1
    // if(nums[left] < nums[mid]) {
    } else {
      // check: is target present between nums[left] and nums[mid]? 
      if(nums[left] <= target && target <= nums[mid]) {
        // check left side first 
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  };
  return - 1; 
}