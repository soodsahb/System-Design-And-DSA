public class BuySellStock2 {
    public static int maxProfit(int[] prices) {
        int profit = 0;
        int min = prices[0];
        for (int price : prices) {
            if (price < min) {
                min = price;
            }
            if (price - min > 0) {
                profit += price - min;
                min = price;
            }
        }
        return profit;
    }
}
