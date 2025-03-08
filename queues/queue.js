export class Queue {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    const element = this.items.shift();
    return element;
  }

  display() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Element at ${i} is ${this.items[i]}`);
    }
  }

  display() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Element at ${i} is ${this.items[i]}`);
    }
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[0];
  }

  removeAtIndex(index) {
    if (index >= 0 && index < this.items.length) {
        this.items.splice(index,1)
    }else{
        console.log("Index out of bounds");
    }
  }
}
