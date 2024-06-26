# Day 52 Overview 

## CommonJS vs EcmaScript

**CommonJS**

- CommonJS is a module system that is mainly used in Node.js. 

- In CommonJS the modules are loaded synchronously using 'require()'.

- CommonJS modeules are used on the server-side.

**ECMAScript**

- ECMAScript modules are the official standard for JS modules. 

- The modules in ECMAScript are loaded asynchronously using 'import'.

- ES modules can be used both on the server-side and also on the client-side.

- Modern JS environments including Node.js support ES modules natively. 

### Nodemon and NVM 

**Nodemon**

- Nodemon is a utility that automatically restarts the Node.js application if it detects any changes in the file. 

- It is useful in situation where you have to continously test your application, it is used to solve the problem of manual testing and restarting the server again and again. 

    Commands - 

    1. npm install -g nodemon 
    2. nodemon filename

**NVM**

- It is a version manager for Node.js, allowing you to install and switch between different versions of Node.js. 

- Once it is installed, you can use nvm to install or switch Node.js versions. 

    Commands - 

    1. nvm install node
    2. nvm install 14.17.0 // installing a specific version
    3. nvm use 14.17.0 // switch to the specified version
    4. nvm ls // Listing the installed versions 