export class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  display() {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.stack.length) {
      throw new Error("Invalid index");
    }

    const element = this.stack.splice(index, 1);
    if (element.length > 0) {
      return element[0];
    } else {
      return null;
    }
  }
}
