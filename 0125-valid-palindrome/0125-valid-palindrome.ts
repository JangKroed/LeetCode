function isPalindrome(s: string): boolean {
  if (s.trim().length === 0) {
    return true;
  }

  let temp: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const isEvenNum = temp.length % 2 === 0 ? 0 : 1;

  const start = temp.slice(0, Math.floor(temp.length / 2));
  const end = temp.slice(Math.floor(temp.length / 2 + isEvenNum), temp.length);

  let endIdx = end.length - 1;

  for (const str of start) {
    if (str !== end[endIdx]) {
      return false;
    }
    endIdx--;
  }

  return true;
}