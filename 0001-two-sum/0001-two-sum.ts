function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }

      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result.slice(0, 2);
}