# JS Functions

- A function in JS is a reuseable block of code that is used to perform a specific task.

## Defining a Function

1. Function Declaration
- A function can be declared using the function keyword.


        function greet(name) {
            return `Hello, ${name}!`;
        }   

        console.log(greet("Alice")); 

2. Function Expression
- Functions can also be assigned to variables.

        const add = function(a, b) {
            return a + b;
        };

        console.log(add(5, 3));

3. Arrow Function (ES6)
- Arrow functions provide a more concise syntax.

        const multiply = (a, b) => a * b;

        console.log(multiply(4, 2)); 

## Function Parameters and Arguments

- Functions can accept parameters, which act as placeholders for values.

        function sayHello(name = "User") {
            console.log(`Hello, ${name}`);
        }

        sayHello();       
        sayHello("John");  

- Return Statement
    - The return statement specifies the value a function should return.


            function square(num) {
                return num * num;
            }

            console.log(square(6)); 

