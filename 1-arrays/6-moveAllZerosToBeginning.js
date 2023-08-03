// Move All Zeros to Beginning 
// given an array of integers "nums", move all zeroes to the LEFT of array 
// perform the operation "in-place" 

nums = [1, 10, 20, 0, 59, 63, 0, 88, 0]
output = [0, 0, 0, 1, 10, 20, 59, 63, 88]

/*

idx   0   1   2   3   4   5   6   7   8
num   1   10  20  0   59  63  0   88  0
                                      R/W => READ/WRITE at end of array 
                                  R   W   => READ !== 0 so we'll swap with WRITE 

      1   10  20  0   59  63  0   0   88
                              R   W       => READ === 0; decrease by 1
                          R       W       => READ !== 0; swap with WRITE 

      1   10  20  0   59  0   0   63  88
                          R   W           => READ === 0; decrease by 1
                      R       W           => READ !== 0; swap with WRITE 

      1   10  20  0   0   0   59  63  88
                  R       W               => READ === 0; decrease by 1
              R           W               => READ !== 0; swap with WRITE 

      1   10  0   0   0   20  59  63  88
          R           W                   => READ !== 0; swap with WRITE 
      
      1   0   0   0   10  20  59  63  88
      R           W                       => READ !== 0; swap with WRITE 

      0   0   0   1   10  20  59  63  88
  
  R           W                           => return the array 
*/

// Approach: 
// - initialize read/write pointer at end of array 
// - keep looping while "read" pointer has elements to visit on input array   
// - case: if read pointer meets a 0 we will decrease "read" by 1 
// - case: if read pointer is NOT 0 set value of "write" equal to "read" and decrement both by 1 
// - when read pointer reaches 0 we assign 0's to all of write pointers 

// Time: O(n) as we iterate input array once 
// Space: O(1) we don't incur extra memory


function moveZerosToLeft(nums) {
  // initialize left/right pointers starting at end of array
  let read = nums.length - 1;
  let write = nums.length - 1;
  // keep looping while read >= 0 
  while(read >= 0) {
    // check: if current element at "READ" is 0? we'll decrease read by 1 more 
    if(nums[read] === 0) {
      read--
    // else: we'll make a swap between read/write
    } else {
      let temp = nums[read]
      nums[read] = nums[write]
      nums[write] = temp; 
      read--
      write-- 
    }
  };
  return nums; 
}

// console.log(moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0])); 