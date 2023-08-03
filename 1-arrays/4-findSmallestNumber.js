// Find Smallest Common Number
// given 3 integer arrays sorted in ascending order, return smallest number found in all 3 arrays
// return -1 if no common number is found

// v1 = [6, 7, 10, 25, 30, 63, 64]
// v2 = [0, 4, 5, 6, 7, 8]
// v3 = [1, 6, 10, 14]
// output = 6

/* 

idx   0   1   2   3   4   5   6 
v1    6   7   10  25  30  63  64
      i                           => 6

v2    0   4   5   6   7   8
      j                           => 0; this moves first since it's the lowest; j++
          j                       => 4
          j                       => 4; this moves since it's lowest; j++
              j                   => 5; this moves since it's lowest; j++
                  j               => 6

v3    1   6   10  14  
      k                           => 1
      k                           => 1; this moves first since it's the lowest; k++
          k                       => 6

*/ 

// Approach
// - initialize 3 pointers i, j, k that start at 0
// - keep looping while pointers are < length of each of the arrays they're traversing 
// - check: if arr1[i] === arr2[j] && arr2[j] === arr3[k] we know it's a match 
// - to find a way to increase i, j, k pointers we'll check which one is the lowest among all 3 
// - if element at i < element at j && element at i < element at k? i++
// - if element at j < element at i && element at j < element at k? j++
// - if element at k < element at i && element at k < element at j? k++ 
// - return -1 if no common is found 

// Time: O(3n) -> O(n) where n is length of the array
// Space: O(1) 

function findLeastCommonNumber(arr1, arr2, arr3) {
  // initialize 3 pointers i,j,k at 0
  let i = 0
  let j = 0
  let k = 0

  // keep looping while i < arr.length && j < arr.length && k < arr.length
  while(i < arr1.length && j < arr2.length && k < arr3.length) {
    // check: if element at i, j, k are equal we can return any variable with its element 
    if(arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      return arr1[i]
    }

    // find a way to increase i, j, k if each is lower than the other party
    // if arr1[i] <= arr2[j] && arr1[i] <= arr3[k] 
    if(arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
      i++
    }
  
    // if arr2[j] <= arr1[i] && arr2[j] <= arr3[k]
    else if(arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
      j++
    }
  
    // if arr3[k] <= arr1[i] && arr3[k] <= arr2[j]
    else if(arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
      k++
    }; 
  }

  return -1;
}

// console.log(findLeastCommonNumber([6, 7, 10, 25], [0, 4, 5, 6, 7], [1, 6, 10, 14])) // 