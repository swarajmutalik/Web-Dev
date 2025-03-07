# JS Error Handling 

- Error handling in JS is used to ensure that the applications run smoothly and handle the unexpected issues.

## Types of Errors 

- `SyntaxError` – Occurs when there is incorrect syntax in the code.

- `ReferenceError` – Occurs when trying to access an undefined variable.

- `TypeError` – Occurs when an operation is performed on a value of the wrong type.

- `RangeError` – Occurs when a value is out of an allowed range.

## Using the `try...catch` 

- The `try..catch` statement is used to handle exceptions in JS.

        try {
            let result = x * 10;  // 'x' is not defined, ReferenceError will occur
        } catch (error) {
            console.error("An error occurred:", error.message);
        }
## Using `finally` block

- The `finally` block executes regardless of whether an error occurs or not.

        try {
            let num = 10;
            console.log(num.toUpperCase()); // TypeError: num.toUpperCase is not a function
        } catch (error) {
            console.error("Error:", error.message);
        } finally {
            console.log("This will run no matter what!");
        }

## Throwing custom errors with `throw`

- You can manually throw errors using the `throw` keyword.

        function validateAge(age) {
            if (age < 18) {
                throw new Error("Age must be 18 or above.");
            }
            return "Access granted!";
        }

        try {
            console.log(validateAge(16)); 
        } catch (error) {
            console.error("Validation Error:", error.message);
        }



