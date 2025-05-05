let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
console.log(arr.length);

arr[0] = 23;

console.log(arr, typeof arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

console.log(arr.toString());
console.log(arr.join(" and "));

let a = [1, 2, 3, 4, 5, 6];
console.log(a.pop());
console.log(a.push(10));
console.log(a);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

console.log(a1.concat(a2, a3));

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums.splice(1, 4));