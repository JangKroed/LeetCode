function majorityElement(nums: number[]): number {
  const obj: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    !obj[nums[i]] ? (obj[nums[i]] = 1) : obj[nums[i]]++;
  }

  let maxKey: number = 0;
  let maxValue: number = 0;

  for (const key in obj) {
    if (!maxKey && !maxValue) {
      maxKey = Number(key);
      maxValue = obj[key];
      continue;
    }

    if (obj[key] > maxValue) {
      maxKey = Number(key);
      maxValue = obj[key];
    }
  }

  return maxKey;
}