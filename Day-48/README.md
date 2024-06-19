# Day 48 Overview

## Introduction to Error Handling in JS

Error Handling in JS is important for making applications user-friendly. It allows developers to manage errors, preventing them from crashing the entire application.

JS provides a 'try...catch' statement to  handle the exceptions.

### try-catch statment 

- try - It is used to wrap the block of code that might throw an error. 

- catch - It executes when an error occurs in the 'try' block. 

- finally - It executes after the 'try' and 'catch' blocks, regardless of whether an error was thrown or not. 

### Key Points 

- If an error occurs in the 'try' block, the remaining code in the 'try' block is skipped and the control is transferred to the 'catch' block.

- The 'finally' block is useful for cleanup actions such as closing files or releasing resources, that need to occur regardless of an error. 

### Custom Errors 

- We can throw custom errors using the 'throw' statement.

- Custom errors can be instances of the 'Error' class or derived class 

- Throwing custom errors can make your error handling more specific and meaningful.

