// Sort Colors 
// given an array of "N" colors, sort the array in place so that numbers are adjacent to each other

nums = [2, 0, 2, 1, 1, 0]
output = [0, 0, 1, 1, 2, 2]

// Quick Sort with recursion 
// - BASE CASE FOR RECURSION: if elements are < 2 return the array 
// - grab a pivot value at end of nums array 
// - initialize left/right subarrays
// - iterate nums array from left to right (0 until end - 1) 
// - check: if current element <= pivot 
// - want to push to left subarray
// - check: if current element > pivot
// - want to push to right subarray 
// - recursively: [...sortColors(left), pivot, ...sortColors(right)]

// MAX STACK EXCEEDED
// function sortColors(arr) {
//   // BASE CASE FOR RECURSION:
//   if(arr.length < 2) return arr; 
//   let pivot = arr[arr.length - 1]
//   let left = []
//   let right = []
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] <= pivot) {
//       left.push(arr[i])
//     } else if(arr[i] > pivot) {
//       right.push(arr[i])
//     };
//   };
//   return [...sortColors(left), pivot, ...sortColors(right)] 
// };

function sortColors(arr) {
  if(arr.length < 2) return arr; 
  let pivot = arr[0]; 
  let left = []
  let right = []
  for(let i = 1; i < arr.length; i++) {
    // if element <= pivot 
    if(arr[i] <= pivot) {
      // push to left
      left.push(arr[i])
    // if element > pivot 
    } else {
      // push to right
      right.push(arr[i])
    }
  };
  return [...sortColors(left), pivot, ...sortColors(right)]
}

console.log(sortColors([-1, 40, 39, 11, 11, 49, 68, 0, 9]))