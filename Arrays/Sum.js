const arr=[1,3,5,7,8];
let sum=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}

console.log(sum)

/////using for...of loop

const number =[3,4,5,6,7,8]
let add =0

for(const num of number){
    add+=num
}

console.log(add)

/////using reduce()

const numbers = [1, 2, 3, 4, 5];

const plus = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(plus); // Output: 15
