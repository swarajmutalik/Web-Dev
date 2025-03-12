# ECMAScript vs CommonJS

- `ECMAScript` - It is the standard that defines the core features of JS, new versions are released periodically to introduce new features and improvements.

- `CommonJS` - It is a module system used in Node.js. It uses `require()` and `module.exports`

## When to Use ECMAScript Modules vs. CommonJS
Use CommonJS if:

- You're working with older Node.js projects.

- You need synchronous execution (e.g., scripts).

- You use packages that still rely on CJS.

Use ES Modules if:

- You want modern, async-friendly imports.

- Your project supports ES6+ and runs in the browser.

- You’re working with modern tools like Webpack, Babel, and TypeScript.