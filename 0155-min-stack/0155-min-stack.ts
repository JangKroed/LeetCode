class MinStack {
  private stack: Array<number>;
  private minArr: Array<number>;
  private topIdx: number;

  constructor() {
    this.stack = new Array<number>();
    this.minArr = new Array<number>();
    this.topIdx = -1;
  }

  push(val: number): void {
    this.topIdx++;
    this.stack[this.topIdx] = val;

    if (!this.minArr.length || this.getMin() >= val) {
      this.minArr.push(val);
    }
  }

  pop(): void {
    if (this.topIdx < 0) {
      throw new Error("Stack Underflow Exception!");
    }

    if (this.stack[this.topIdx] === this.getMin()) {
      this.minArr.pop();
    }
    this.stack[this.topIdx] = NaN;
    this.topIdx--;
  }

  top(): number {
    return this.stack[this.topIdx];
  }

  getMin(): number {
    return this.minArr[this.minArr.length - 1];
  }
}