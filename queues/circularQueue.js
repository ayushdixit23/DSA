// export class MyCircularQueue {
//   constructor(capacity) {
//     this.queue = Array(capacity).fill(-1);
//     this.front = -1;
//     this.rear = -1;
//     this.capacity = capacity;
//   }

//   isFull() {
//     return this.front === (this.rear + 1) % this.capacity;
//   }

//   isEmpty() {
//     return this.front === -1;
//   }

//   enQueue(value) {
//     if (this.isFull()) return false;

//     if (this.isEmpty()) {
//       this.front = 0;
//     }

//     this.rear = (this.rear + 1) % this.capacity;
//     this.queue[this.rear] = value;

//     return true;
//   }

//   deQueue() {
//     if (this.isEmpty()) return false;

//     this.queue[this.front] = -1;

//     if (this.front === this.rear) {
//       this.front = -1;
//       this.rear = -1;
//     } else {
//       this.front = (this.front + 1) % this.capacity;
//     }
//     return true;
//   }

//   Front() {
//     if (this.isEmpty()) return -1;
//     return this.queue[this.front];
//   }

//   Rear() {
//     if (this.isEmpty()) return -1;
//     return this.queue[this.rear];
//   }

//   size() {
//     if (this.isEmpty()) return 0;
//     if (this.rear >= this.front) {
//       return this.rear - this.front + 1;
//     } else {
//       return this.capacity - this.front + this.rear + 1;
//     }
//   }
// }

export class MyCircularQueue {
  constructor(capacity) {
    this.queue = Array(capacity).fill(-1);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.front === (this.rear + 1) % this.capacity;
  }
  isEmpty() {
    return this.front === -1;
  }
  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front !== 0 && this.rear === this.capacity - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.queue[this.rear] = value;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.queue[this.front] = -1;
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.capacity - 1) {
      this.front = 0;
    } else {
      this.front++;
    }

    return true;
  }
  Front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.front];
  }
  Rear() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.rear];
  }
  size() {
    if (this.isEmpty()) {
      return 0;
    }
    if (this.rear < this.front) {
      return this.capacity - this.front + this.rear + 1;
    } else {
      return this.rear - this.front + 1;
    }
  }
}
