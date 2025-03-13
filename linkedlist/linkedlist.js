class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  display() {
    let tempHead = this.head;

    console.log(`Started`);

    while (tempHead !== null) {
      console.log(`Element is ${tempHead.value}`);
      tempHead = tempHead.next;
    }

    console.log(`End`);
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }

  length() {
    return this.size;
  }

  addFirst(value) {
    if (!value) return;

    if (this.isEmpty()) {
      this.add(value);
    }

    let node = new Node(value);
    node.next = this.head;
    this.head = node;

    this.size++;
  }

  addAtIndex(index, value) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.addFirst(value);
      return;
    }

    let tempHead = this.head;
    let count = 0;

    const node = new Node(value);

    while (count < index - 1) {
      tempHead = tempHead.next;
      count++;
    }

    node.next = tempHead.next;
    tempHead.next = node;

    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
      return;
    }

    if (this.size === 1) {
      this.removeFirst();
      return;
    }

    let tempHead = this.head;
    while (tempHead.next !== this.tail) {
      tempHead = tempHead.next;
    }

    tempHead.next = null;
    this.tail = tempHead;
    this.size--;
  }

  removeByIndex(index) {
    if (this.isEmpty() || index < 0 || index >= this.size) {
      console.log(`Invalid index or empty list`);
      return;
    }

    if (index === 0) {
      this.removeFirst();
    }

    let tempHead = this.head;
    let count = 0;

    let previousNode = null;

    while (tempHead !== null && count < index) {
      previousNode = tempHead;
      tempHead = tempHead.next;
      count++;
    }

    if (tempHead !== null) {
      previousNode.next = tempHead.next;

      if (tempHead === this.tail) {
        this.tail = previousNode;
      }

      this.size--;
    }
  }

  removeByValue(value) {
    let tempHead = this.head;
    let previousNode = null;
    while (tempHead !== null) {
      if (tempHead.value === value) {
        if (tempHead === this.head) {
          this.head = tempHead.next;
          if (this.head === null) {
            this.tail = null;
          }
        } else if (tempHead === this.tail) {
          this.tail = previousNode;
          previousNode.next = null;
        } else {
          previousNode.next = tempHead.next;
        }
        this.size--;
        console.log(`Removed value: ${value}`);
        break;
      }

      previousNode = tempHead;
      tempHead = tempHead.next;
    }

    console.log(`Value ${value} not found in the list.`);
  }

  removeByValueAll(value) {
    let tempHead = this.head;
    let previousNode = null;
    while (tempHead !== null) {
      if (tempHead.value === value) {
        if (tempHead === this.head) {
          this.head = tempHead.next;
          if (this.head === null) {
            this.tail = null;
          }
        } else if (tempHead === this.tail) {
          this.tail = previousNode;
          previousNode.next = null;
        } else {
          previousNode.next = tempHead.next;
        }
        this.size--;
        console.log(`Removed value: ${value}`);
        tempHead = previousNode ? previousNode.next : this.head;
      } else {
        previousNode = tempHead;
        tempHead = tempHead.next;
      }
    }
  }

  reverse() {
    if (this.size < 2) {
      return;
    }

    let previous = null;
    let current = this.head;
    let next = this.head.next;

    while (current !== null) {
      current.next = previous;
      previous = current;
      current = next;
      if (next != null) {
        next = next.next;
      }
    }

    this.head = previous;
  }

  reverseUsingRecursion() {
    const reverseRecursively = (node) => {
      if (node === null || node.next === null) {
        return node;
      }
      const newHead = reverseRecursively(node.next);
      node.next.next = node; 
      node.next = null;  
      return newHead; 
    };
    this.head = reverseRecursively(this.head);
  }

  createCycle(position) {
    if (position < 0 || position >= this.size) {
      console.log("Invalid position for cycle");
      return;
    }

    let tempHead = this.head;
    let count = 0;
    let cycleNode = null;

    while (tempHead !== null) {
      if (count === position) {
        cycleNode = tempHead; 
      }
      if (tempHead.next === null) {
        tempHead.next = cycleNode; 
        console.log(`Cycle created at node ${cycleNode.value}`);
        return;
      }
      tempHead = tempHead.next;
      count++;
    }
  }
}
