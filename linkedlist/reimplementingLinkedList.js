class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
    let temphead = this.head;
    while (temphead !== null) {
      console.log(`Elememt is ${temphead.value}`);
      temphead = temphead.next;
    }

    console.log(`Transversal done`);
  }

  isEmpty() {
    return this.size === 0;
  }

  length() {
    return this.size;
  }

  toArray() {
    if (this.isEmpty()) return [];
    const arr = [];
    let temphead = this.head;
    while (temphead !== null) {
      arr.push(temphead.value);
      temphead = temphead.next;
    }
    return arr;
  }

  remove() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
      return;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let tempHead = this.head;
      while (tempHead.next !== this.tail) {
        tempHead = tempHead.next;
      }
      tempHead.next = null;
      this.tail = tempHead;
    }

    this.size--;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  addAtFirst(value) {
    if (this.isEmpty()) {
      this.add(value);
      return;
    }

    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    this.size++;
  }

  insertAt(index, val) {
    if (this.isEmpty()) {
      this.add(val);
      return;
    }
    const node = new Node(val);

    let tempHead = this.head;
    let localIndex = 0;
    while (localIndex < index - 1) {
      tempHead = tempHead.next;
      localIndex++;
    }
    node.next = tempHead.next;
    tempHead.next = node;

    this.size++;
  }

  removeAt(index) {
    if (this.isEmpty()) {
      return;
    }

    let tempHead = this.head;
    let localIndex = 0;

    let previousNode = null;

    while (tempHead !== null && localIndex < index) {
      previousNode = tempHead;
      tempHead = tempHead.next;
      localIndex++;
    }

    if (tempHead !== null) {
      previousNode.next = tempHead.next;

      if (tempHead === this.tail) {
        this.tail = previousNode;
      }

      this.size--;
    }
  }

  getAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
      return undefined;
    }

    let tempHead = this.head;
    let localIndex = 0;
    while (localIndex < index) {
      tempHead = tempHead.next;
      localIndex++;
    }
    return tempHead.value;
  }

  setAt(index, val) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
      return;
    }

    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let tempHead = this.head;
    let localIndex = 0;

    while (localIndex < index) {
      tempHead = tempHead.next;
      localIndex++;
    }

    tempHead.value = val;
  }
}

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(14);
linkedList.add(13);
linkedList.insertAt(1, 15);

// linkedList.addAtFirst(20)
// console.log( linkedList.length())

// linkedList.display();
// linkedList.clear()
linkedList.display();
// console.log(linkedList.size)
// linkedList.remove()
// console.log(linkedList.size)

// linkedList.removeAt(1);
console.log(linkedList.getAt(1));

linkedList.display();

linkedList.setAt(1, 99);

console.log(linkedList.toArray());
