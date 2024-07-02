# Day 55 Overview

## Requests, Responses and Routes in Express.js

### Requests 

A request in express.js is used to represent the HTTP requests that are being made by a client to a server. This object contains various properties and methods that provide information about the request.

Some of the common properties of request are as follows -

- req.params - It contains routes parameters, which can be named segments of the URL that are used to capture values specified at their position in the URL.

- req.query - It contains query string parameters, which are key-value pairs located in the URL after the question mark.

- req.body - It contains the data that is sent by the client in the body of the request. It is mainly used with the POST and PUT requests.

- req.headers - It contains the headers sent by the client.

- req.method - It specifies the HTTP method of the request.

- req.url - It provides the URL path of the request.

### Response 

A response in express.js represents the HTTP response that an express app sends when it gets an HTTP request.

Some of the most common methods of response are as follows -

- res.send - It is used to send a response to the client.

- res.json - It is used send a json response. This method automatically sets the 'Content-Type' header to 'application/json'.

- res.status - It is used to set the status code of the response.

- res.redirect - It is used to redirect the client to a different URL.

- res.render - It is used to render a view and send the HTML back to the client. It is commonly used in conjunction with view engines like EJS.

### Routes

Routes are used to define the endpoint for your application and determine how it responds to the client requests. These are mainly defined using methods like .get(), .post(), .put() and .delete().
