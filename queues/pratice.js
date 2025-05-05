import { Queue } from "./queue.js";
const queue = new Queue();

const reverseQueue = (queue) => {
  if (queue.size() == 1) {
    return queue;
  }

  const newQueue = new Queue();
  queue.items.forEach((item) => newQueue.enqueue(item));

  const array = [];

  while (!newQueue.isEmpty()) {
    const element = newQueue.dequeue();
    if (element) {
      array.enqueue(element);
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    newQueue.enqueue(element);
  }
  return newQueue;
};

// isPalindrome
const isPalindrome = () => {
  console.log(
    queue.items.join(",").toString() ===
      reverseQueue(queue).items.join(",").toString()
  );
  if (
    queue.items.join(",").toString() ===
    reverseQueue(queue).items.join(",").toString()
  ) {
    return true;
  } else {
    return false;
  }
};

// Generate Binary Numbers up to n
function generateBinaryNumbers(n) {
  const queue = new Queue();
  const result = [];

  queue.enqueue("1");

  for (let i = 0; i < n; i++) {
    const binary = queue.dequeue();
    result.enqueue(binary);

    queue.enqueue(binary + "0");
    queue.enqueue(binary + "1");
  }

  return result;
}
// console.log(generateBinaryNumbers(5));

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// Interleave First Half with Second Half
function interleaveQueue() {
  const newQueue = new Queue();
  const halfNumber = queue.size() / 2;

  for (let i = 0; i < halfNumber; i++) {
    newQueue.enqueue(queue.dequeue());
  }

  while(!newQueue.isEmpty()){
    queue.enqueue(newQueue.dequeue())
    queue.enqueue(queue.dequeue());     
  }
}