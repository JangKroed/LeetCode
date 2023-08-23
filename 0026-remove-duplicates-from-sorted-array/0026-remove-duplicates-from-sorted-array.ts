function removeDuplicates(nums: number[]): number {
  let prev: number = nums[0];
  let count: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (prev !== nums[i]) {
      nums[count] = nums[i];
      count++;
      prev = nums[i];
    }
  }

  return count;
}