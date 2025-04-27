const validPalindrome = function (s) {
  if (s.length <= 2) {
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  const isPalindromeWithOutChar = (s, left, right) => {
    while (left < right) {
      if (s[left] === s[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }
    return true;
  };

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return (
        isPalindromeWithOutChar(s, left + 1, right) ||
        isPalindromeWithOutChar(s, left, right - 1)
      );
    }
  }
  return true;
};
