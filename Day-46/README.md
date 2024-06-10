# Day 46 Overview

## JS Callbacks and Promises 

### JS Callbacks 

A callback is a function that is passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action. 

#### Characteristics 

- These are used to handle asynchronous operations like fetching the data from an API, reading files. 

- In JS, functions can be passed as an argument to other functions, returned to functions and assigned to variables.

### Nested Callbacks 

when the callbacks are nested within other callbacks, it can lead to a situation known as "callback hell" which makes the code difficult to read and maintain. 

### JS Promises 

A Promise is an object that is used to represent the eventual completion of an asynchrous operation and its resulting value. 

Promises provide a cleaner and more robust way to handle the async operations to callbacks.

A promise can be created using the 'Promise' constructor which takes a function with two parameters i.e., resolve and reject.

Promises have '.then()', 'catch()' and 'finally()' methods that are used to handle the resolved and rejected states.

Promises can be chained to perform multiple async operations in sequence.

### Promise Operations

1. Promise.all() - It takes an array of promises and returns a single promise that resolves when all the promises have resolved or rejects when any of the promises reject.

2. Promise.race() - It is used to return a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

3. Promise.allSettled() - It returns a  promise that resolves after all the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.