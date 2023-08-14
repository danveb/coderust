// manually sort without using "SORT" method
// O(n^2) as we use a nested loop 
function selectionSort(nums) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] > nums[j]) {
        let temp = nums[j]
        nums[j] = nums[i]; 
        nums[i] = temp; 
      }
    }
  };
  return nums; 
}

// O(n log n) in best case; O(n^2) for worst case
function quickSort(nums) {
  // edge case: if nums has 1 element we return nums 
  if(nums.length < 2) return nums; 
  let pivot = nums[0]; 
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