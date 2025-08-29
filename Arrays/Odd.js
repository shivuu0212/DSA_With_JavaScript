const numbers = [3, 7, 2, 9, 4, 6];
const odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odds.push(numbers[i]);
  }
}

console.log(odds); 
