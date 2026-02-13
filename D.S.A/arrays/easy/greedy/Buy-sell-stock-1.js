/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=213131311311;
    let profit =0;

    for(let i=0;i<prices.length;i++){
       min=Math.min(min,prices[i])
      profit=Math.max(profit,prices[i]-min);
    }
    return profit
};
// Explanation:
// - Track minimum price seen so far.
// - For each day, compute profit if sold today.
// - Update maximum profit when larger profit appears.
// - Keep updating minimum when lower price appears.
// - Return best single-transaction profit.

