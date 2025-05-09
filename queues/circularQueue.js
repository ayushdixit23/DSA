export class MyCircularQueue {
  constructor(capacity) {
    this.queue = Array(capacity).fill(-1);
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
  }

  isFull() {
    return this.front === (this.rear + 1) % this.capacity;
  }

  isEmpty() {
    return this.front === -1;
  }

  enQueue(value) {
    if (this.isFull()) return false;

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;

    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;

    this.queue[this.front] = -1;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    return true;
  }

  Front() {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
  }

  Rear() {
    if (this.isEmpty()) return -1;
    return this.queue[this.rear];
  }

  size() {
    if (this.isEmpty()) return 0;
    if (this.rear >= this.front) {
      return this.rear - this.front + 1;
    } else {
      return this.capacity - this.front + this.rear + 1;
    }
  }
}
