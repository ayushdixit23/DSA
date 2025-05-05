class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class QueueLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  dequeue() {
    if (this.length > 0) {
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }

      return value;
    } else {
      return null;
    }
  }

  peek() {
    if (this.length > 0) {
      const value = this.head.value;
      return value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  display() {
    let tempHead = this.head;
    console.log(`Started`);
    while (tempHead !== null) {
      console.log(tempHead.value);
      tempHead = tempHead.next;
    }
    console.log(`Ended`);
  }
}
