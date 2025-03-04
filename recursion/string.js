const string = "ayush";
const reverseString = (str) => {
  if (str === "") {
    return "";
  }

  const firstLetter = str.charAt(0);
  const remainingString = str.slice(1);

  return reverseString(remainingString) + firstLetter;
};

// console.log(reverseString(string))

const isPalindrom = (string) => {
  if (string === reverseString(string)) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPalindrom(string))

const subsets = (string) => {
  let result = [];

  function helper(index, array) {
    if (index === string.length) {
      result.push(array.join(""));
      return;
    }
    array.push(string[index]);
    helper(index + 1, array);
    array.pop();
    helper(index + 1, array);
  }

  helper(0, []);
  return result;
};

// console.log(subsets("abc"))
