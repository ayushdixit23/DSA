// Sum of All Subarrays of Size K
function sumOfSubarraysOfSizeK(arr, k) {
  if (k === 1) {
    return arr;
  }
  const sumArr = [];
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  sumArr.push(sum);
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    sumArr.push(sum);
  }
  return sumArr;
}

const arr = [1, 2, 3, 4, 5];
const k = 1;
// console.log(sumOfSubarraysOfSizeK(arr, k));

