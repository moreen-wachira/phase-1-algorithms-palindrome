function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('abba')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('a')); // true
console.log(isPalindrome('robot')); // false
console.log(isPalindrome('ab')); // false