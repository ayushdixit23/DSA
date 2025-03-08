export class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    const element = this.items.pop();
    return element;
  }

  peek() {
    const lastElement = this.items[this.items.length - 1];
    return lastElement;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  display() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Element at ${i} is ${this.items[i]}`);
    }
  }

  removeAtIndex(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    } else {
      console.log("Index out of bounds");
    }
  }
}


