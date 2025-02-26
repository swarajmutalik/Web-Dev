let arr = [1,2,3,4,5,6];

console.log(arr);
console.log(arr.length);
console.log(arr, typeof arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[0] = 566;
console.log(arr[0]);

console.log(arr.toString());
console.log(arr.join(" and "));

let numbers = [1,2,3,4,5];
// numbers.splice(0,3);
numbers.splice(1,3);
console.log(numbers);

const nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.slice(2,7));

let b = [456,346,678,124];
console.log(b.sort());

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

let a4 = a1.concat(a2,a3);
console.log(a4);    
