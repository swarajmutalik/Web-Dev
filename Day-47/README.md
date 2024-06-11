# Day 47 Overview

## Introduction to Async and Await

- async and await are used in JS to make it easier to work with async code.

- They are built on top of Promises, providing a cleaner and more readable way to write async code.

### Async Functions

- It is a function that is declared with 'async' keyword.

- When an async function is called, it is used to return a promise.

### Await Functions

- The await keyword can only be used inside the async functions.

- It is used to pause the execution of the async function and waits for the promise to resolve.

- Once the promise is resolved, it returns the result, and the async function.

### Key Points

- 'async' and 'await' helps to write async code that looks synchronous, making it easier to read and maintain.

- Error handling can be done using 'try...catch' blocks within 'async' functions.

- Multiple 'await' calls will wait sequentially, meaning each 'await' will wait for the previous one to complete before moving to the next.

### Fetch API

- The 'fetch' API is a modern replacement for XHR (XMLHttpRequest) for making network requests.

- It is built on promises and provides a more powerful and flexible feature set fot handling HTTP requests.

- The 'fetch' function takes a URL as a parameter and returns a Promise that resolves to a 'Response' object.

### Key Features

- 'fetch' is promise-based and provide a more straightforward and powerful way to handle network requests compared to XHR.

- It does not reject on HTTP error status. Instead, it resolves normally and sets an 'ok' property of the response to 'false' if the status code is not in the of 200 to 299.

- The 'Response' object methods return Promises.
