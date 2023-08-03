// Search a Rotated Array 
// search for a target given a sorted array that's been rotated by K
// return its index, else -1

// nums = [4, 5, 6, 1, 2, 3]
// target = 1
// output = 3

/*

idx   0   1   2   3   4   5   6   7
num   4   5   6   7   8   1   2   3
      i                               => 4 !== target; keep going 
          i                           => 5 !== target; keep going 
              i                       => 6 !== target; keep going 
                  i                   => 7 !== target; keep going 
                      i               => 8 !== target; keep going 
                          i           => 1 === target; found it

*/ 

// Brute Force
// - iterate linearly over the input array
// - check: if current element meets target we return its index 
// - return -1 if not found

// Time: O(n) where "N" is length of input array 
// Space: O(1) we don't incur extra memory

// function searchRotated(nums, target) {
//   // edge case: if nums array is empty return -1
//   if(nums.length === 0) return -1; 
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] === target) {
//       return i
//     }
//   };
//   return -1; 
// }

/* 

target = 7
idx   0   1   2   3   4   5   6
num   5   6   7   1   2   3   4
      L           M           R   => 1 < 4; we know it's sorted
                      L   M   R   => target not present here so we'll go LEFT side
      L   M   R                   => 5 < 6; we know it's sorted
      LMR                         => target not present here so we'll go RIGHT side 
          LM  R                   => 6 < 7; we know it's sorted
          LMR                     => target not present here so we'll go RIGHT side
              LMR                 => target found

*/ 

// Optimal 
// - perform binary search on a ROTATED AND SORTED ARRAY 
// -  array is sorted in ascending order, but rotated at unknown pivot -> modified binary search
// - we know half of array is ALWAYS SORTED
// - if target is within sorted half of array we perform basic binary search
// - otherwise we discard sorted half array and keep examining unsorted half 
// - main key is VALUE of MID can be in sorted order, while right side is NOT sorted 

// Time: O(log n) where our input array "n" gets halved by each iteration 
// Space: O(1) 

function binarySearchRotated(nums, target) {
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

// console.log(binarySearchRotated([4, 5, 6, 7, 8, 1, 2, 3], 3)) // 7