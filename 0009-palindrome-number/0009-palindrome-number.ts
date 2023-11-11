function isPalindrome(x: number): boolean {
    const copy = x.toString().split('').reverse().join('')
    return x === +copy
};