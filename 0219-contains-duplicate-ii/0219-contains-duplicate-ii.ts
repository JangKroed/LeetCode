function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hashMap: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]) && Math.abs(hashMap.get(nums[i])! - i) <= k) {
      return true;
    }

    hashMap.set(nums[i], i);
  }

  return false;
}