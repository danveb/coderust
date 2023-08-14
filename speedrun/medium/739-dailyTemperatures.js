// Daily Temperatures 
// given an array "temperatures", return an array "answer" such that answer[i] is number of days we have to wait after ith day to get a warmer temperature. If no future day is possible, keep answer[i] === 0

temperatures = [73, 74, 75, 71, 69, 72, 76, 73] 
answer = [1, 1, 1, 4, 2, 1, 1, 0, 0] 

temperatures = [30, 40, 50, 60]
answer = [1, 1, 1, 0]

temperatures = [30, 60, 90] 
answer = [1, 1, 0]

// Time: O(n^2) where we perform a nested loop
// Space: O(1) 

function dailyTemperatures(temperatures) {
  // initialize length of days as the length of temperatures
  let days = temperatures.length; 
  // initialize answer []
  const answer = []; 
  // iterate over entire days (length) 
  for(let i = 0; i < days; i++) {
    // iterate over days again 
    for(let j = i + 1; j < days; j++) {
      // check: if temperatures[j] > temperatures[i] we know it's 1 
      if(temperatures[j] > temperatures[i]) {
        // set answer[i] to be j - i
        answer[i] = j - i;
        // break the loop
        break; 
      }
    }
  };
  return answer; 
}