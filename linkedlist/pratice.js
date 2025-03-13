import { LinkedList } from "./linkedlist.js";

const consoleIfIsEmplty = () => {
  console.log(list.isEmpty());
  return;
};

const consoleSize = () => {
  console.log(list.length());
  return;
};

const consoleDisplayList = () => {
  list.display();
  return;
};

// const list = new LinkedList();
// consoleIfIsEmplty();
// list.add(1);
// list.add(10);
// list.add(10);
// list.addFirst(100);
// list.add(3);
// list.addFirst(40);
// list.addAtIndex(5,20)
// list.add(10);

// consoleIfIsEmplty();

// list.display();
// consoleSize()

// list.reverse()
// list.reverseUsingRecursion()

// list.removeFirst()
// list.removeLast()
// list.removeByIndex(3)
// list.removeByValueAll(10)
// list.display();
// consoleSize()

// const deleteDuplicates = () => {
//   let temp = list.head;

//   while (temp !== null && temp.next !== null) {
//     const nextNode = temp.next
//     const nextsNextNode = nextNode.next

//     if(temp.val===nextNode.val){
//         temp.next = nextsNextNode
//         nextNode.next = null
//     }else{
//         temp = temp.next
//     }
//   }
// };

// deleteDuplicates()

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.createCycle(2)

// consoleDisplayList();

// reverse a linked list
const reverseLinkedList = () => {
  let previousNode = null;
  let currentNode = list.head;
  let next = list.head.next;

  while (currentNode != null) {
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
    if (next) {
      next = next.next;
    }
  }

  list.head = previousNode;
};

// reverseLinkedList();

// find middle node of list
const findMiddleNode = () => {
  let slow = list.head;
  let fast = list.head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
};

// console.log(findMiddleNode());

// Detect cycle
const isCyclePresent = () => {
  let slow = list.head;
  let fast = list.head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// console.log(isCyclePresent())

// merge two sorted list
const mergeSortedLists = () => {
  const list1 = new LinkedList();
  list1.add(1);
  list1.add(3);
  list1.add(5);

  const list2 = new LinkedList();
  list2.add(2);
  list2.add(4);
  list2.add(6);

  const list = new LinkedList();

  let listhead1 = list1.head;
  let listhead2 = list2.head;

  while (listhead1 !== null && listhead2 !== null) {
    if (listhead1.value < listhead2.value) {
      list.add(listhead1.value);
      listhead1 = listhead1.next;
    } else {
      list.add(listhead2.value);
      listhead2 = listhead2.next;
    }
  }

  while (listhead1 !== null) {
    list.add(listhead1.value);
    listhead1 = listhead1.next;
  }

  while (listhead2 !== null) {
    list.add(listhead2.value);
    listhead2 = listhead2.next;
  }

  list.display()
};

// mergeSortedLists()

// consoleDisplayList();
