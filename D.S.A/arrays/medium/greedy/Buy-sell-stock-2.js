/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit=0;
    let min=prices[0];

     for(let i=0;i<prices.length;i++){
      if(prices[i]<min){
        min=prices[i];
      }
      if(prices[i]-min>0){
        profit+=prices[i]-min;
        min=prices[i];
      }

     }

     return profit;
};
// Explanation:
// - Track current buying price (`min`).
// - If today is cheaper, update buying price.
// - If profitable, add gain and treat today as new buy.
// - This captures all increasing segments.
// - Return total profit from multiple trades.


// Complexity:
// - Time: O(n) because prices are scanned once and every rise is added.
// - Space: O(1) because only a few tracking variables are used.

