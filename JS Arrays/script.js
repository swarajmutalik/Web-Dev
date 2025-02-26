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
numbers.splice(0,3);
// numbers.splice(1,3);
console.log(numbers);
