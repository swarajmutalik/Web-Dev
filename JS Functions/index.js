function nice(name) {
    console.log("Hey " + name + " you are nice.");
    console.log("Hey " + name + " you are good.");
    console.log("Hey " + name + " your tshirt is looking good.");
}

const func1 = (x) => {
    console.log("I am an arrow function", x); 
}

function sum(a, b, c = 3) {
    return a + b + c;
}

result = sum(4, 5);
console.log("The result of these numbers is " + result);

nice('Swaraj');
func1(34);