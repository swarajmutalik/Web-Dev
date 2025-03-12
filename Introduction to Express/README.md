# Introduction to Express 

- Express.js is a minimal and flexible Node.js web framework used for building web applications and APIs.

- It helps in simplifying the process of handling HTTP requests, managing middleware, and routing.

## Key Features of Express.js

- Fast & Lightweight - It is built on top of Node.js for high performance.

- Routing System - It handles multiple routes efficiently.

- Middleware Support - It processes requests before sending responses.

- Static File Serving - It helps us in serving images, CSS, JS and other static assets.

## Installing Expres.js 

    npm init -y 
    npm i express

## Creating a Basic Express Server

    const express = require('express');
    const app = express();

    // Define a route
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });

    // Start the server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

We can run the server using the command `node server.js`

## Serving Static Files in Express.js 

- Express provides a built-in middleware, `express.static()` to serve static files like HTML, CSS, JS and images. 

1. Create a Public Folder 

        /public
        ├── index.html
        ├── style.css
        ├── script.js
        ├── images/
        ├── assets/


2. Use `express.static()` Middleware 

        const express = require('express');
        const app = express();

        // Serve static files from the 'public' folder
        app.use(express.static('public'));

        // Start the server
        app.listen(3000, () => {
            console.log('Server running on http://localhost:3000');
        });

3. Access Static Files - Open `http://localhost:3000/index.html` to see index.html