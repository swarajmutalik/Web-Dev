let arr = [1,3,5,7,11,13];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]; 
//     newArr.push(element**2); 
// }

// let newArr = arr.map((e) => e**2);
// console.log(newArr);

const greaterThanSeven = (e) => {
    if(e > 7){
        return true;
    }
    return false;
}
let newArr = arr.filter(greaterThanSeven)
console.log(newArr);

let arr2 = [1,2,3,4,5];
const red = (a,b) =>{
    return a + b;
}

console.log(arr2.reduce(red));
