function maxProfit(prices: number[]): number {
  if (prices.length <= 1) {
    return 0;
  }

  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const cur = prices[i + 1] - prices[i];
    if (cur > 0) {
      max += cur;
    }
  }

  return max;
}