// Merge Intervals
// given array "intervals", where intervals[i] = [start, end], merge all overlapping intervals
// return an array that covers all the intervals in input

intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
output = [[1, 6], [8, 10], [15, 18]]

// Brute Force 
// - use a 2 pointer approach (i, j) to iterate over intervals array 

// INTUITION
// - end1 
// - start2 
// - end2 

// function merge(intervals) {
//   if(intervals.length === 0) return []; 
//   const answer = []; 
//   for(let i = 0; i < intervals.length; i++) {
//     for(let j = i + 1; j < intervals.length; j++) {
//       let [start1, end1] = intervals[i]
//       let [start2, end2] = intervals[j]
//       // check: if start1 <= end2 && end1 >= start2 || start2 <= end1 && end2 >= start1 
//       if(start1 <= end2 && end1 >= start2 || start2 <= end1 && end2 >= start1) {
//         // merge overlapping
//         intervals[j] = [Math.min(start1, start2), Math.max(end1, end2)] 
//         intervals[i] = null; 
//         break; 
//       }
//     }
//   };
  
//   for(let interval of intervals) {
//     if(interval !== null) {
//       answer.push(interval); 
//     }
//   };

//   return answer; 
// }

// Optimal
// - push intervals[0] to output [] at beginning 
// - iterate over interavls from index 1 until end 
// - initialize end1, start2, end2 
// - CHECK: if end1 >= start2
// -- set end1 to be MAX between end1, end2 
// -- else we push current interval to output []
// - return output []

// INTUITION 
// end1
// start2 
// end2 

// Time: O(n) where n is length of intervals array
// Space: O(n) for output []

function merge(intervals) {
  // manually sort intervals in increasing order IF NEEDED
  // intervals.sort((a, b) => a[0] - b[0])
  if(intervals.length === 0) return []; 
  const answer = [intervals[0]];
  for(let i = 1; i < intervals.length; i++) {
    let end1 = answer[answer.length - 1][1] // 3
    let start2 = intervals[i][0];
    let end2 = intervals[i][1]; 
    // check: if end1 >= start2 we should merge because it'd overlap
    if(end1 >= start2) {
      answer[answer.length - 1][1] = Math.max(end1, end2); 
    } else {
      answer.push(intervals[i])
    }
  }
  return answer; 
}

module.exports = merge 