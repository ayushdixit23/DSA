class Node {
  constructor(key, value, previous, next) {
    this.key = key;
    this.previous = previous ? previous : null;
    this.value = value;
    this.next = next ? next : null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
  }

  removeNode(node) {
    if (!node) return;
    if (node.previous) {
      node.previous.next = node.next;
    } else {
      this.head = node.next;
      if (this.head) { 
        this.head.previous = null;
      }
    }
    if (node.next) {
      node.next.previous = node.previous;
    } else {
      this.tail = node.previous;
      if (this.tail) {
        this.tail.next = null;
      }
    }
  
    node.next = null;
    node.previous = null;
  }

  addNodeToTail(node) {
    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
    }

    this.tail = node;

    if (this.head == null) {
      this.head = node;
    }
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.removeNode(node);
      this.addNodeToTail(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    const node = new Node(key, value);
    if (this.map.has(key)) {
      const existingNode = this.map.get(key);
      existingNode.value = value;
      this.removeNode(existingNode);
      this.addNodeToTail(existingNode);
    } else {
      if (this.map.size >= this.capacity) {
        const existingNode = this.head;
        this.map.delete(existingNode.key);
        this.removeNode(this.head);
      }
      this.addNodeToTail(node);
      this.map.set(key, node);
    }
  }

  display() {
    let tempHead = this.head;
    console.log(`Treversal started`);

    while (tempHead != null) {
      console.log(`${tempHead.value} is present`);
      tempHead = tempHead.next;
    }

    console.log(`Treversal ended`);
  }

  displayFromRight() {
    let tempHead = this.tail;
    console.log(`Treversal started`);

    while (tempHead != null) {
      console.log(`${tempHead.value} is present`);
      tempHead = tempHead.previous;
    }

    console.log(`Treversal ended`);
  }
}