export class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.queue.length > 0) {
      return this.queue.shift();
    } else {
      return null;
    }
  }

  display() {
    for (let i = 0; i < this.queue.length; i++) {
      console.log(this.queue[i]);
    }
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.queue.length > 0) {
      return this.queue[0];
    } else {
      return null;
    }
  }

  size() {
    return this.queue.length;
  }
}
