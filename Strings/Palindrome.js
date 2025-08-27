function isPalindrome(input) {
  // Convert number to string (if input is number)
  let str = input.toString();

  // Reverse the string
  let reversed = str.split("").reverse().join("");

  // Compare original and reversed
  return str === reversed;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
