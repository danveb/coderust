// Merge Array with Overlapping Intervals 
// given a sorted array of interval pairs [x, y], merge the overlapping intervals and return a new output array 

intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
output = [[1, 6], [8, 10], [15, 18]]

// CAN I ASSUME THE INTERVALS ARE ALWAYS SORTED? IF SO NO NEED TO SORT, ELSE YES SORT! 

/* 

v   1--2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18
    x-----x
       x-----------x
                         x-----x
                                                    x----------x
*/ 

// Brute Force 
// - use 2 pointer approach from left-to-right 
// - push the first interval [0] into result []
// - iterate over input array (1 until end) 
// - initialize end1 (from result array), start2 (from v array), end2 (from v array) respectively 
// - check: if end1 >= start2 we know it's overlapping so we'll set end2 to finish at end2 
// - else we'll just push current interval at "I" to result [] 
// - return result []

// Time: O(n) where n is length of input array 
// Space: O(n); worst case there are no overlapping elements in array

function mergeIntervals(v) {
  // manually sort intervals in ascending order 
  // v.sort((a, b) => a[0] - b[0])
  let result = [];
  // push interval[0] to result 
  result.push(v[0]); 
  // iterate over interval array (1 until end) 
  for(let i = 1; i < v.length; i++) {
    // initialize end1, start2, end2 
    let end1 = result[result.length - 1][1] // 3 
    let start2 = v[i][0] // 2
    let end2 = v[i][1] // 6

    // check: if end1 >= start2 we know it's overlapping so we'll set end1 to finish at end2
    if(end1 >= start2) {
      result[result.length - 1][1] = Math.max(end1, end2) 
    // else we'll push interval to result []
    } else {
      result.push(v[i]); 
    }
  }
  return result; 
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); 
console.log(mergeIntervals([[1, 5], [4, 6], [6, 8], [11, 15]])); 