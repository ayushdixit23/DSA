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
    this.queue = Array(capacity + 1).fill(null);
    this.front = 0;
    this.rear = 0;
    this.capacity = capacity + 1;
  }

  enqueue(value) {
    if ((this.rear + 1) % this.capacity === this.front) {
      console.log("Queue is full");
    } else {
      this.queue[this.rear] = value;
      this.rear = (this.rear + 1) % this.capacity;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    } else {
      const value = this.queue[this.front];
      this.queue[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      return value;
    }
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let i = this.front;
    while (i !== this.rear) {
      console.log(this.queue[i]);
      i = (i + 1) % this.capacity;
    }
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.queue[this.front];
  }

  size() {
    return (this.rear - this.front + this.capacity) % this.capacity;
  }
}
