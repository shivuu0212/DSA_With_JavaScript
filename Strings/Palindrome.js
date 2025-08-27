// Q1 - Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

////////////method1//////////


// const isPalindrome = function (x) {
//   return x < 0 ? false : String(x) === String(x).split("").reverse().join("");
// };

// const res = isPalindrome(10);
// console.log(res); // false


//////////method2//////////

var isPalindrome = function(x) {
    if (x < 0) return false;  // negative numbers are not palindrome

    let str = x.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
};

console.log(isPalindrome(121));   
console.log(isPalindrome(-121));  
console.log(isPalindrome(10));    
