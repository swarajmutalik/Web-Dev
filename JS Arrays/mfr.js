let arr = [1, 3, 5, 36, 27];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element ** 2);
// }
let newArr = arr.map((e) => {
    return e ** 2;
})

console.log(newArr);

const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven));

let arr2 = [1, 7, 8, 11];
const red = (a, b) => {
    return a + b;
}

console.log(arr2.reduce(red));