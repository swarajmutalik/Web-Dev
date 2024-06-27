# Day 53 Overview 

## Working with Files and Path Modules

**fs Module**

- The fs module in Node.js allows you to interact with the file system on your computer. 

- It provides both sync and async methods to perform operations like reading, writing, deleting the files and the directories. 

Some functions that are being used while working with files are as follows -

**writeFileSync** 

- It is used to write the data to a file in a synchronous manner, that means it blocks the execution of the program until the operation is complete. 

**writeFile** 

- It is used to write the data into a file asynchronously, that means it doesn't block the execution of the code. The program runs in the background while the operation is getting performed in the background. 

**readFile** 

- It is a method in Node.js that is used to asynchronously read the contents of a file. 

- It is commonly used to read the data from files without blocking the execution of the program. 

**Path Module**

- It is a module in Node.js that is used to provide utilities for working with file and directory paths.

- It is especially useful for handling and transforming file paths in a cross-platform manner.

Some functions that are being used while working with path module are as follows -

**path.basename()**

- It is used to return the last portion of a path.

**path.dirname()**

- It is used to return the directory name of a path.

**path.extname()**

- It is used to return the extension of the path from the last occurrence of the dot(.) to the end of the string in the last portion of the path.

