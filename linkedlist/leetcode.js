import { LinkedList, Node } from "./linkedlist.js";

const deleteNode = function () {
  let tempHead = linkedList.head;
  while (tempHead.next.value !== node.value) {
    tempHead = tempHead.next;
  }

  tempHead.next = node.next;
  node.next = null;

  linkedList.head = tempHead;
};
const linkedList = new LinkedList();

// linkedList.add(4);
// linkedList.add(5);
// linkedList.add(1);
// linkedList.add(9);

// linkedList.display();
// deleteNode()

class Solution {
  construct(arr) {
    if (arr.length === 0) return null; 
    let head = new Node(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        current.next = newNode; 
        current = newNode;
    }
    
    return head;
  }
}

const sol = new Solution();
const list = sol.construct([1, 2, 3, 5]);

console.log(list)