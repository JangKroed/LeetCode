function removeElement(nums: number[], val: number): number {
  let idx = 0;
  let popCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    } else {
      popCount++;
    }
  }

  for (let y = 0; y < popCount; y++) {
    nums.pop();
  }

  return nums.length;
}