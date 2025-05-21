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

// Leetcode 443. String Compression
const compress = function (chars) {
    if (chars.length === 1) {
        return 1
    }

    let i = 0
    let changeIndex = 0

    while (i < chars.length) {
        let j = i + 1

        while (j < chars.length && chars[i] === chars[j]) {
            j++
        }
        let count = j - i
        chars[changeIndex++] = chars[i]
        if (count > 1) {
            let stringChar = String(count)

            for (let m = 0; m < stringChar.length; m++) {
                chars[changeIndex++] = stringChar[m]
            }
        }
        i = j
    }

    return changeIndex
};