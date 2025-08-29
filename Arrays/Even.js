const numbers = [3, 7, 2, 9, 4, 6];
const evens = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}

console.log(evens); // Output: [2, 4, 6]
