/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (nums.length === 1) {
    return;
  }

  if (nums.length > 2) {
    if (nums.length >= k) {
      const arr: number[] = nums.splice(0, nums.length - k);
      nums.push(...arr);
    } else {
      const arr: number[] = nums.splice(nums.length - k);
      nums.unshift(...arr);
    }
  } else {
    if (k % 2 !== 0) {
      [nums[0], nums[1]] = [nums[1], nums[0]];
    }
  }
}