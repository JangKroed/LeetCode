function canJump(nums: number[]): boolean {
    let maxReach = 0;
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        // 현재 위치까지 갈 수 있는 최대 거리를 갱신합니다.
        maxReach = Math.max(maxReach, i + nums[i]);

        // 현재 위치가 최대 도달 가능 거리를 벗어나면 도달할 수 없다는 것을 의미합니다.
        if (maxReach < i + 1 && i !== length - 1) {
            return false;
        }
    }

    return true;
}