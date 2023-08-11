// Find Minimum in Rotated Sorted Array 
// given a sorted rotated array "nums", return minimum element of the array

// nums = [3, 4, 5, 1, 2]
// output = 1

// nums = [4, 5, 6, 7, 0, 1, 2]
// output = 0

// Brute Force 
// - iterate over input array linearly 
// - intialize minElement as Infinity
// - as we visit each element, check: if current element < minElement 
// - we can set minElement to be current element 

// Time: O(n)
// Space: O(1) 

// function findMin(nums) {
//   let minElement = Infinity; 
//   for(let i = 0; i < nums.length; i++) {
//     // check: if current element < minElement 
//     if(nums[i] < minElement) {
//       // set minElement to this 
//       minElement = nums[i]
//     }
//   };
//   return minElement; 
// }

// Optimal
// - perform binary search where we search for nums[mid] 
// - check: if nums[mid] >= nums[right] we know it's RIGHT 
// - left = mid + 1, else right = mid - 1
// - return nums[left] 

function findMin(nums) {
  if(nums.length === 0) return null 
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2); 
    // check which side is sorted
    if(nums[mid] >= nums[right]) {
      left = mid + 1 
    } else {
      right = mid - 1
    }
  };
  return nums[left] 
}