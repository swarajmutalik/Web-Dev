let a = prompt("Enter first number:");

let b = prompt("Enter Second number:");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not allowed");
}
let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1;
    try {
        console.log("The sum is ", sum * x);
        return true;
    } catch (error) {
        console.log("Error has occured");
        return false;
    } finally {
        console.log("files are being closed and db connection is being closed");
    }
}

let c = main();
