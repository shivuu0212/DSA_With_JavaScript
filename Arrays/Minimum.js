const numbers =[2,4,5,7,8]
let min=numbers[0]

for(let i=0;i>numbers.length;i--){

    if(numbers[i]<max){
min=numbers[i]
    }

}
console.log(min)


////////using reduc()

const number = [3, 7, 2, 9, 5];

const mini = numbers.reduce((a, b) => (a < b ? a : b));

console.log(mini); // Output: 9