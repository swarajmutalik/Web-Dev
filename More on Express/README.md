# Express Router 

- It is a feature of the Express.js framework that allows you to organize byour application by defining the routes separately and then using them in your main application file. 

- This makes managing routes easier and helps in maintaining a clean and scalable codebase.

- To use `express.Router()`, the following steps are to be followed: 

    1. Create a new route file 

    2. Define the routes inside the file.

    3. Export the router and use it in your main application file. 

- Example of Express Router

            const express = require('express');
            const router = express.Router();

            // Define routes
            router.get('/', (req, res) => {
                res.send('Welcome to the Blog!');
            });

            router.get('/post/:id', (req, res) => {
                res.send(`Viewing post with ID: ${req.params.id}`);
            });

            // Export router
            module.exports = router;

- app.js(main file)
    
            const express = require('express');
            const app = express();
            const blogRoutes = require('./routes/blogRoutes');

            // Middleware to use the router
            app.use('/blog', blogRoutes);

            app.listen(3000, () => {
                console.log('Server running on port 3000');
            });


## Serving static files in Express 

- These are the files that include images, CSS, JavaScript and other assets that should be accessible by the client.

- `express.static` middleware is used to serve static assets. 

- File structure - 

        /my-app
        /public
            /css
            style.css
            /images
            logo.png
            /js
            script.js
        app.js