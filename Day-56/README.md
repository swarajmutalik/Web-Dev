# Day 56 Overview

## Introduction to Middleware

Middleware functions are functions that have the access to the request object, the response object and the next middleware function in the application's request-response cycle.

These functions can perform various tasks such as executing the code, modifying the request and response objects, ending the request-response cycle and calling the next middelware function.

### Types of Middleware

1. Application-level - It is a type of middleware that is bound to an instance of the 'express' object using 'app.use()'.

2. Router-Level - It is a type of middleware that works in the same way as application-level middleware does but it is bound to an instance of 'express.Router()'.

3. Error-Handling - It is a type of middleware that is allows us to separate our error logic and send the responses accordingly.

4. Built-in - It is a type of middleware that is provided by express itself like 'express.static' that is used to serve the static assets.

5. Third-party - It is a type of middleware that is created by the community to handle specific tasks.

### How Middleware Works

1. Order Matters - The order in which the middleware is defined in the application determines the order in which it is executed.

2. next() function - calling the 'next()' passes the control to the next middleware function, by not calling the 'next()' will leave the request hanging.

3. Chaining of Middleware - Multiple middlewares can be chained together to handle a single route.
