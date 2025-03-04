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
  }

  add(value) {
    let node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  }

  display() {
    let currentPointer = this.head;

    console.log(`Start`);

    while (currentPointer !== null) {
      console.log(`Element => ${currentPointer.value}`);
      currentPointer = currentPointer.next;
    }

    console.log(`End`);
  }

  addFirst(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node; 
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addAtIndex(index, value) {
    if (index < 0) {
      console.log("Invalid index");
      return;
    }

    // Case 1: Adding at the beginning (index 0)
    if (index === 0) {
      this.addFirst(value);
      return;
    }

    let current = this.head;
    let count = 0;

    // Traverse the list to find the node just before the specified index
    while (current !== null && count < index - 1) {
      current = current.next;
      count++;
    }

    // Case 2: If index is greater than the length of the list, don't insert
    if (current === null) {
      console.log("Index out of bounds");
      return;
    }

    // Case 3: Inserting at a valid index
    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;

    // Case 4: If inserting at the end, update the tail
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }
}
