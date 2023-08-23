function removeDuplicates(nums: number[]): number {
  let MAX_EXIST_COUNT: number = 2;

  let count: number = 1;
  let popCount: number = 0;

  let prev: number = nums[0];
  let cur: number;
  
  let idx: number = 1;

  for (let i = 1; i < nums.length; i++) {
    cur = nums[i];

    if (prev !== cur) {
      nums[idx] = cur;
      idx++;
      prev = cur;
      count = 1;
    } else if (prev === cur) {
      if (MAX_EXIST_COUNT > count) {
        nums[idx] = cur;
        idx++;
        count++;
      } else {
        popCount++;
      }
    }
  }

  for (let y = 0; y < popCount; y++) {
    nums.pop();
  }

  return nums.length;
}