function maxProfit(prices: number[]): number {
  if (prices.length <= 1) {
    return 0; // 가격을 계산할 데이터가 충분하지 않음
  }

  let minPrice = prices[0]; // 초기 최소 가격은 첫 번째 가격으로 설정
  let maxProfit = 0; // 초기 최대 이익은 0으로 설정

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // 더 작은 가격이 발견되면 최소 가격 업데이트
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice; // 현재 가격과 최소 가격을 기준으로 가능한 최대 이익 업데이트
    }
  }

  return maxProfit;
}