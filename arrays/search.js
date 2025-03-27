// Linear Search
const arr = [1, 2, 3, 4, 5, 6];

let target = 5;

const linearSearch = () => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      console.log(`Target is present at index ${i}`);
      return i;
    }
  }
  return -1;
};

console.log(linearSearch());


const binarySearch = () => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target === arr[mid]) {
      console.log(`Target is present at index ${mid}`);
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch());
