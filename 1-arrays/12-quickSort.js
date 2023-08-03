// Quick Sort 
// given an integer array, sort in ascending order with quicksort algorithm 

// nums = [55, 23, 26, 2, 25]
// output = [2, 23, 25, 26, 55] 

// Brute Force
// - manually sort nums array in ascending order
// - return it 

// Time: O(n log n) for manually sort
// Space: O(1) 

// function quickSort(nums) {
//   let sortedNums = nums.sort((a, b) => a - b); 
//   return sortedNums; 
// }

/*   

    -6  20  8  -2  4

    LEFT      PIVOT     RIGHT
    -6  -2      4        8   20

    LEFT    PIVOT     RIGHT     LEFT    PIVOT     RIGHT
    -6       -2                  8        20              

=>  -6 -2 4  8   20

*/ 

// Optimal 
// - use quick sort algorithm with recursion
// - BASE CASE: if nums array is left with 1 element we can return it so we stop recursing
// - grab pivot element as the last element in the array 
// - left array will contain elements < pivot
// - right array will contain elements > pivot 
// - repeat partition for left/right subarrays 
// - merge left/right subarrays and include the initial pivot in the middle

// Time
// - Worst case: O(n^2) 
// - Avg case: O(n log n) 

// Space: O(log n) 

// function quickSort(nums) {
//   // BASE CASE RECURSION 
//   if(nums.length < 2) return nums; 
//   // initialize pivot element as last element in the array
//   let pivot = nums[nums.length - 1] // 4
//   // initialize left/right subarrays
//   let left = [];
//   let right = []; 
//   // iterate input array until end - 1, since we already have a pivot recorded
//   for(let i = 0; i < nums.length - 1; i++) {
//     // check: is current element <= pivot? 
//     // TAKE CARE OF DUPLICATES
//     if(nums[i] <= pivot) {
//       // push to left subarray
//       left.push(nums[i]) 
//     // check: is current element > pivot? 
//     } else {
//       // push to right subarray 
//       right.push(nums[i]); 
//     };
//   };
//   // concatenate left, pivot, right arrays recursively
//   // require a base case to finish recursion -> if nums array is left with 1 element we return nums array 
//   return [...quickSort(left), pivot, ...quickSort(right)]; 
// }; 

console.log(quickSort([55,23,26,2,18,78,23,8,2,3])); 

function quickSort(nums) {
  if(nums.length < 2) return nums 
  let pivot = nums[0] 
  let left = []
  let right = []
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] <= pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  };
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// console.log(quickSort([1, 2, 3, 7, 8, 9]))