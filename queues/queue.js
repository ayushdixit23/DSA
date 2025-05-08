// export class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(value) {
//     this.queue.push(value);
//   }

//   dequeue() {
//     if (this.queue.length > 0) {
//       return this.queue.shift();
//     } else {
//       return null;
//     }
//   }

//   display() {
//     for (let i = 0; i < this.queue.length; i++) {
//       console.log(this.queue[i]);
//     }
//   }

//   isEmpty() {
//     return this.queue.length === 0;
//   }

//   peek() {
//     if (this.queue.length > 0) {
//       return this.queue[0];
//     } else {
//       return null;
//     }
//   }

//   size() {
//     return this.queue.length;
//   }
// }

export class Queue {
  constructor(capacity) {
    this.queue = Array(capacity).fill(undefined);
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    if (this.rear >= this.capacity) {
      console.log(`Queue is full`);
      return false;
    } else {
      this.queue[this.rear] = value;
      this.rear++;
      return true;
    }
  }

  dequeue() {
    if (this.front === this.rear) {
      console.log(`Queue is Empty`);
      return null;
    } else {
      const value = this.queue[this.front];
      this.queue[this.front] = undefined;
      this.front++;
      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;
      }
      return value;
    }
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.queue[this.front];
    }
  }

  display() {
    for (let i = this.front; i < this.rear; i++) {
      console.log(`Element at ${i} is ${this.queue[i]}`);
    }
  }

  size() {
    return this.rear - this.front;
  }
}
