// Best Time to Buy/Sell Stock 
// given array "prices" where prices[i] is price of a given stock in ITH day
// maximize profit by choosing a single day to buy one stock and choose a different day in future to sell
// return maximum profit; if not 0 

// prices = [7, 1, 5, 3, 6, 4] 
// output = 5; we buy on day 2 (price = 1) and sell day 5 (price = 6)

// Brute Force
// - use a 2 pointer approach (i, j) where we calculate prices[j] - prices[i] for profit 
// - initialize maxProfit at 0 and as we calculate profit we can re-set maxProfit to MAX profit, maxProfit 

// Time: O(n^2) where we use a nested for loop; we'll iterate at a specific element and re-iterate i + 1 
// Space: O(1) 

function maxProfit(prices) {
  if(prices.length === 0) return 0;
  let maxP = 0;
  for(let i = 0; i < prices.length; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      // initialize profit as prices[j] - prices[i] 
      let profit = prices[j] - prices[i]; 
      // set maxProfit as MAX(profit, maxProfit) 
      maxP = Math.max(profit, maxP)
    }
  }
  return maxP; 
}

// Optimal
// - keep track of minBuy as prices[0] 
// - keep track of maxP at 0 
// - iterate over input array once (i at 1 until end)
// - initialize profit as prices[i] - minBuy
// - set maxP as MAX(profit, maxP) 
// - set minBuy as MIN(minBuy, prices[i]) 
// - return maxP 

// Time: O(n) where n is length of input array
// Space: O(1) 

function maxProfit(prices) {
  if(prices.length === 0) return 0; 
  let minBuy = prices[0]; 
  let maxP = 0; 
  for(let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minBuy; 
    maxP = Math.max(profit, maxP); 
    minBuy = Math.min(minBuy, prices[i]);
  }; 
  return maxP; 
}