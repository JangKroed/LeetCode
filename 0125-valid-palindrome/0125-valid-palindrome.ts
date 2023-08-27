function isPalindrome(s: string): boolean {
  if (s.trim().length === 0) {
    return true;
  }

  const alphanumericArray: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let temp: string = "";

  for (const str of s) {
    if (alphanumericArray.includes(str.toLowerCase())) {
      temp += str.toLowerCase();
    }
  }

  const isEvenNum = temp.length % 2 === 0 ? 0 : 1;

  const start = temp.slice(0, Math.floor(temp.length / 2));
  const end = temp
    .slice(Math.floor(temp.length / 2 + isEvenNum), temp.length)
    .split("")
    .reverse()
    .join("");

  return start === end;
}