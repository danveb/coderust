// Implement Binary search on Sorted Array 
// given an array of integers sorted in ascending order
// given an integer "target"
// if target exists in the array return its index
// return -1 if does NOT exist 

nums = [1, 3, 6, 8, 11, 39, 55] 
target = 3 
output = 1 

nums = [3, 9, 10, 33, 44, 55, 66] 
target = 100
output = -1

/*

idx   0 1 2 3 4
num   1 3 6 8 9
      i         => 1 !== target
        i       => 3 !== target
          i     => 6 !== target
            i   => 8 === target; return index 3

*/ 

// Brute Force 
// - iterate over input array once 
// - at each iteration we check if current element at i matches target
// - if it matches we return its index 
// - return -1 if target not found 

// Time: O(n) where n is length of input array 
// Space: O(1) we don't incur extra memory 

// function binarySearch(nums, target) {
//   if(nums.length === 0) return -1; 
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] === target) {
//       return i
//     }
//   };
//   return -1; 
// }

/* 

idx   0 1 2 3 4 5
num   1 3 5 7 8 9
      L   M     R => 5 !== target; check right side 
            L M R => 8 !== target; check right side 
                LMR => 9 === target; return index 5

*/

// Optimal
// - perform binary search with 2 pointers (left, right) and 3rd pointer (mid) 
// - as we keep looping we check if element at mid === target
// - check: if nums[mid] === target -> return mid as the index 
// - check: if nums[mid] < target -> we check RIGHT side
// - check: if nums[mid] > target -> we check LEFT side 

// Time: O(log n) as the input array is halved at each iteration
// Space: O(1) we don't incur extra memory 

function binarySearch(nums, target) {
  if(nums.length === 0) return -1; 
  let left = 0;
  let right = nums.length - 1; 
  while(left <= right) {
    let mid = Math.floor((left + right) / 2); 
    // check: if nums[mid] === target
    if(nums[mid] === target) {
      return mid; 
    // check: if nums[mid] < target
    } else if(nums[mid] < target) {
      left = mid + 1;
    // check: if nums[mid] > target 
    } else {
      right = mid - 1;
    };
  }
  // we didn't find our target 
  return -1; 
}

// console.log(binarySearch([1, 3, 8, 9, 10], 10)) // 4 