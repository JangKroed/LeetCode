const operatorHandler: { [key: string]: Function } = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => Math.trunc(a / b),
};

const operators: string[] = ["+", "-", "*", "/"];

function evalRPN(tokens: string[]): number {
  const arr: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      const b = arr.pop();
      const a = arr.pop();
      arr.push(operatorHandler[tokens[i]](a, b));
    } else {
      arr.push(Number(tokens[i]));
    }
  }

  return arr[0];
}