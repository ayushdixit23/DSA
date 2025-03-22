class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map();
      this.head = new Node(0, 0);
      this.tail = new Node(0, 0);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
  
    remove(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  
    insertAtFront(node) {
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next.prev = node;
      this.head.next = node;
    }
  
    get(key) {
      if (!this.map.has(key)) return -1;
  
      let node = this.map.get(key);
      this.remove(node);
      this.insertAtFront(node);
  
      return node.value;
    }
  
    put(key, value) {
      if (this.map.has(key)) {
        let node = this.map.get(key);
        node.value = value;
        this.remove(node);
        this.insertAtFront(node);
      } else {
        if (this.map.size >= this.capacity) {
          let lruNode = this.tail.prev;
          this.remove(lruNode);
          this.map.delete(lruNode.key);
        }
  
        let newNode = new Node(key, value);
        this.map.set(key, newNode);
        this.insertAtFront(newNode);
      }
    }
  }
  

const cache = new LRUCache(3);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); 
cache.put(3, 3);
console.log(cache.get(2)); 
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));