class Node {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous ? previous : null;
    this.next = next ? next : null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
    }

    this.tail = node;

    this.length++;
  }

  remove(value) {
    if (!this.head) {
      console.log("List is Empty!");
      return;
    }

    let tempHead = this.head;

    while (tempHead != null) {
      if (tempHead.value === value) {
        if (!tempHead.previous && !tempHead.next) {
          this.head = null;
          this.tail = null;
        } else if (!tempHead.previous) {
          this.head = tempHead.next;
          this.head.previous = null;
        } else if (!tempHead.next) {
          this.tail = tempHead.previous;
          this.tail.next = null;
        } else {
          tempHead.previous.next = tempHead.next;
          tempHead.next.previous = tempHead.previous;
        }

        this.length--;
        return;
      }

      tempHead = tempHead.next;
    }
  }

  find(value) {
    let tempHead = this.head;
    while (tempHead != null) {
      if (value === tempHead.value) {
        return tempHead;
      }
      tempHead = tempHead.next;
    }
    return -1;
  }

  // Tranversal based on next (left to right)
  display() {
    let tempHead = this.head;
    console.log(`Treversal started`);

    while (tempHead != null) {
      console.log(`${tempHead.value} is present`);
      tempHead = tempHead.next;
    }

    console.log(`Treversal ended`);
  }

  // Tranversal based on next (right to left)
  displayFromRight() {
    let tempHead = this.tail;
    console.log(`Treversal started`);

    while (tempHead != null) {
      console.log(`${tempHead.value} is present`);
      tempHead = tempHead.previous;
    }

    console.log(`Treversal ended`);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;

    this.length = 0;
  }

  toArray() {
    const arr = [];
    let tempHead = this.head;
    while (tempHead != null) {
      arr.push(tempHead.value);
      tempHead = tempHead.next;
    }

    return arr;
  }

  insertAfter(targetValue, newValue) {
    let tempHead = this.head;
    while (tempHead != null) {
      if (targetValue === tempHead.value) {
        let node = new Node(newValue);
        node.next = tempHead.next;
        node.previous = tempHead;
        tempHead.next.previous = node;
        tempHead.next = node;

        this.length++
        return true;
      }
      tempHead = tempHead.next;
    }
    return false;
  }

  insertBefore(targetValue, newValue) {
    let tempHead = this.head;
    while (tempHead != null) {
      if (targetValue === tempHead.value) {
        let node = new Node(newValue);
        node.next = tempHead
        node.previous = tempHead.previous
        tempHead.previous.next = node
        tempHead.previous = node
        this.length++
        return true;
      }
      tempHead = tempHead.next;
    }
    return false;
  }

  reverse(){
    let tempHead = this.head;
    let temp = null;
  
    while (tempHead !== null) {
      temp = tempHead.previous;
      tempHead.previous = tempHead.next;
      tempHead.next = temp;
      tempHead = tempHead.previous;
    }
  
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  reverseRecursive(node = this.head) {
    if (!node) return;

    let temp = node.next;
    node.next = node.previous;
    node.previous = temp;
  
    if (!node.previous) {
      this.tail = this.head;
      this.head = node;
      return;
    }
  
    this.reverseRecursive(node.previous);
  }
  
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.add(19);
doublyLinkedList.add(42);
doublyLinkedList.add(45);
doublyLinkedList.add(39);

// doublyLinkedList.display()
// doublyLinkedList.reverse()
// doublyLinkedList.display()
// doublyLinkedList.reverseRecursive()

doublyLinkedList.display()
