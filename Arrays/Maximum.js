const numbers=[2,5,9,78]
let max =numbers[0]

for(let i=1;i<numbers.length;i++){

    if(numbers[i]>max){
        max=numbers[i]
    }
}
console.log(max)

/////Using Math.max with spread operator

const number = [3, 7, 2, 9, 5];

const maxi = Math.max(...number);

console.log(maxi); // Output: 9
