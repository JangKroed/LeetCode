function removeDuplicates(nums: number[]): number {
  const arr = [...new Set(nums)];

  for (let i = 0; i < nums.length; i++) {
    if (i < arr.length) {
      nums[i] = arr[i];
    }
  }

  return arr.length;
}