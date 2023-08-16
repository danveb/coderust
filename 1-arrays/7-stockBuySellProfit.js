// Stock Buy/Sell to Maximize Profit (Leetcode #121) 
// given an array of stock prices, find the maximum profit with a single buy or sell activity 

prices = [7, 1, 5, 3, 6, 4] 

/* 

idx   0   1   2   3   4   5
num   7   1   5   3   6   4
      i   j                   => 1 - 7 = -6
      i       j               => 5 - 7 = -2
      i           j           => 3 - 7 = -4
      i               j       => 6 - 7 = -1
      i                   j   => 4 - 7 = -3 
          i   j               => 5 - 1 = 4
          i       j           => 3 - 1 = 2
          i           j       => 6 - 1 = 5 => MAX PROFIT (day 2 and day 5) 
          i               j   => 4 - 1 = 3
              i   j           => 3 - 5 = -2
              i       j       => 6 - 5 = 1
              i           j   => 4 - 5 = -1 
                  i   j       => 6 - 3 = 3
                  i       j   => 4 - 3 = 1
                      i   j   => 4 - 6 = -2 

*/ 

// Brute Force 
// - use a 2 pointer approach (i, j) that traverse from left-to-right 
// - initialize currentProfit at 0 
// - initialize maxProfit at 0 
// - iterate over input array once (i at 0 until end)
// - iterate over input array again (j at i + 1 until end)
// - set currentProfit as nums[j] - nums[i]
// - set maxProfit as MAX between currentProfit and maxProfit 
// - return maxProfit 

// Time: O(n^2) where we traverse input array twice 
// Space: O(1) 

// function findBuySellStockPrices(stockNums) {
//   let currentProfit = 0; 
//   let maxProfit = 0;
//   for(let i = 0; i < stockNums.length; i++) {
//     for(let j = i + 1; j < stockNums.length; j++) {
//       // set currentProfit and maxProfit 
//       currentProfit = stockNums[j] - stockNums[i]; 
//       maxProfit = Math.max(maxProfit, currentProfit) ;
//     }
//   };
//   return maxProfit; 
// }

// Optimal
// - initialize minBuy as stockNums[0]
// - iterate once over input array (i at 1 until end) 
// - set currentProfit as nums[i] - minBuy 
// - set maxProfit as MAX between currentProfit and maxProfit
// - set minBuy as MIN between current element at i and minBuy 
// - return maxProfit 

// Time: O(n) where n is length of input array
// Space: O(1) 

// function findBuySellStockPrices(stockNums) {
//   let minBuy = stockNums[0]; 
//   let currentProfit = 0;
//   let maxProfit = 0;
//   for(let i = 1; i < stockNums.length; i++) {
//     currentProfit = stockNums[i] - minBuy; 
//     maxProfit = Math.max(currentProfit, maxProfit); 
//     minBuy = Math.min(stockNums[i], minBuy); 
//   };
//   return maxProfit; 
// }

// console.log(findBuySellStockPrices([7, 1, 5, 3, 6, 4])) // 5

// Given stockNums array of prices return an array with [day of maxSell, day of minBuy] 

let findBuySellStockPrices = function(stockNums) {
  // Initializations
  let currentBuy = stockNums[0];
  let globalSell = stockNums[1];

  // Calculating the global profit
  let globalProfit = globalSell - currentBuy;
  
  // Initializing current_profit with minimum value
  let currentProfit = 0;
  
  //  Looping over stocks to find best buy and selling price
  for (let i = 1; i < stockNums.length; i++) {
    // Calculating the current profit  
    currentProfit = stockNums[i] - currentBuy;
      
    // Current profit is greater than the global profit
    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = stockNums[i];
    }
    
    //  We will always maximise margin relative to the lowest stock price we can find
    // So whenever we find a stock price lower than the current buying price, 
    // we adopt it as the current buying price
    if (currentBuy > stockNums[i]) {
      currentBuy = stockNums[i];
    } 
  }
  // Tuple having buy price and sell price
  return [globalSell - globalProfit, globalSell];
};

console.log(findBuySellStockPrices([7, 1, 5, 3, 6, 4]))
