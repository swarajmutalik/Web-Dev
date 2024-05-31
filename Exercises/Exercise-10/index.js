// Write a program to calculate the factorial of a number using for loops
let a = 6;
function factFor(number) {
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact = fact * index
    }
    return fact
}

console.log(factFor(a))