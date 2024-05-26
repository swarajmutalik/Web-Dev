let arr = [1, 2, 3, 4, 5];

arr[0] = 55;
// console.log(arr, typeof arr);
// console.log(arr.length);

console.log(arr.toString());
console.log(arr.join(" and "));

let numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 2);
console.log(numbers);

numbers.splice(1, 3, 222, 333);
console.log(numbers);
