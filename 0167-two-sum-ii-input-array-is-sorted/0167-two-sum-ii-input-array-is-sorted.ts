function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let y = i + 1; y < numbers.length; y++) {
      if (numbers[i] + numbers[y] === target) {
        return [i + 1, y + 1];
      }
    }
  }

  return [0, 0];
}