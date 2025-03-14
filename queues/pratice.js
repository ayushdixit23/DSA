import { Queue } from "./queue.js";

const logFunctionOutput = (fn) => {
  console.log(fn());
};

const queue = new Queue();

// logFunctionOutput(() => queue.isEmpty());

// queue.push(3);
// queue.push(32);
// queue.push(5);
// queue.push(77);
// queue.pop();
// queue.push(80);

// queue.display();

// logFunctionOutput(() => queue.size());
// queue.removeAtIndex(3);

// logFunctionOutput(() => queue.peek());

// queue.display();
// logFunctionOutput(() => queue.size());

// logFunctionOutput(() => queue.isEmpty());

// reverse queue

// queue.push(1);
// queue.push(2);
// queue.push(1);

// queue.push(3);

// queue.display();

const reverseQueue = (queue) => {
  if (queue.size() == 1) {
    return queue;
  }

  const newQueue = new Queue();
  queue.items.forEach((item) => newQueue.push(item));

  const array = [];

  while (!newQueue.isEmpty()) {
    const element = newQueue.pop();
    if (element) {
      array.push(element);
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    newQueue.push(element);
  }
  return newQueue;
};
// reverseQueue();

// queue.display();

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

// console.log(isPalindrome());

// Generate Binary Numbers up to n
function generateBinaryNumbers(n) {
  const queue = new Queue();
  const result = [];

  queue.push("1");

  for (let i = 0; i < n; i++) {
    const binary = queue.pop();
    result.push(binary);

    queue.push(binary + "0");
    queue.push(binary + "1");
  }

  return result;
}

// console.log(generateBinaryNumbers(5));

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

// Interleave First Half with Second Half
function interleaveQueue() {
  const newQueue = new Queue();
  const halfNumber = queue.size() / 2;

  for (let i = 0; i < halfNumber; i++) {
    newQueue.push(queue.pop());
  }

  while(!newQueue.isEmpty()){
    queue.push(newQueue.pop())
    queue.push(queue.pop());     
  }
}

// interleaveQueue(queue);

// queue.display();
