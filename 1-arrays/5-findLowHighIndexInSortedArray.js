// Find Low/High Index in Sorted Array 
// given a sorted array of integers, return the LOW/HIGH index of a target element
// return -1 if no target is found 

// nums = [1, 2, 5, 5, 5, 5, 20]
// target = 5 
// low = 2
// high = 5 

// Brute Force #1 
// - for finding low index we can perform a linear search from 0 until end of array 
// - if current element at i matches key this is the lowest it is
// - return -1 if nothing is found

// Time: O(n) where n is length of array 
// Space: O(1) we don't incur extra memory

// function findLowIndex(arr, key) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === key) {
//       return i
//     }
//   };
//   return -1; 
// }

// Brute Force #2 
// - for finding high index we can perform a reverse linear search from end of array until 0
// - if current element at i matches key this is the highest index
// - return -1 if nothing is found

// Time: O(n) where n is length of array 
// Space: O(1) we don't incur extra memory

// function findHighIndex(arr, key) {
//   for(let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] === key) {
//       return i
//     }
//   };
//   return -1; 
// }

console.log(findLowIndex([1, 2, 5, 5, 5, 5, 20], 5)); // 2
console.log(findLowIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5)); // 15
console.log(findHighIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5)); // 17

/*

idx   0   1   2   3   4   5   6 
num   1   2   5   5   5   5   20
      L           M           R   => M >= target; let's look LEFT (right = mid - 1)
      L   M   R                   => M < target; let's look RIGHT (left = mid + 1)
              LMR                 => M === target; return its index 2

*/ 

// Optimal 
// - perform a binary search where we look for the target in lowest index
// - initialize left pointer at 0
// - initialize right pointer at end of array 
// - keep looping while left <= right 
// - initialize MID as average between left/right 
// - CHECK: is element at mid > target? let's look left (right = mid - 1)
// - CHECK: is element at mid < target? let's look right (left = mid + 1)
// - CHECK: is element at mid === target? set boundaryIndex here and look left again (right = mid - 1) 

// Time: O(log n) where length of input array gets halved at each iteration
// Space: O(1) 

function findLowIndex(arr, key) {
  let left = 0;
  let right = arr.length - 1; 
  let boundaryIndex = -1; 
  while(left <= right) {
    let mid = Math.floor((left + right) / 2); 
    // check: if current element at MID > target? 
    if(arr[mid] > key) {
      right = mid - 1; 
    } else if(arr[mid] < key) {
      left = mid + 1
    } else if(arr[mid] === key) {
      boundaryIndex = mid; 
      // LOOK LEFT FOR LOW INDEX
      right = mid - 1; 
    }
  }
  return boundaryIndex; 
}

////////////////////////////////////////////////////////////////////////////////////////////////

/* 

idx   0   1   2   3   4   5   6 
num   1   2   5   5   5   5   20
      L           M           R   => M >= target; let's look RIGHT (left = mid + 1)
                      L   M   R   => M === target so let's record boundaryIndex here 

*/ 

function findHighIndex(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1; 
  while(left <= right) {
    let mid = Math.floor((left + right) / 2); 
    // CHECK: if current element at MID > key? 
    if(arr[mid] > key) {
      right = mid - 1; 
    // CHECK: if current element at MID < key? 
    } else if(arr[mid] < key) {
      left = mid + 1; 
    // CHECK: if current element at MID === key? 
    } else if(arr[mid] === key) {
      boundaryIndex = mid; 
      // LOOK RIGHT FOR HIGH INDEX
      left = mid + 1; 
    }
  };
  return boundaryIndex; 
}