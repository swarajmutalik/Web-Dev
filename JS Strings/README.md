# JS Strings 

- A String in JS is a sequence of characters and are used to store and manipulate text.

## String Properties 

1. `Length Property`
- The .length property returns the number of characters in a string.

        let text = "JavaScript";
        console.log(text.length); // Output: 10

2. `Accessing Characters`
- You can access individual characters using bracket notation ([]) or the .charAt() method.

        let word = "Hello";
        console.log(word[0]);      // Output: H
        console.log(word.charAt(1)); // Output: e

3. `toUpperCase() and toLowerCase()`
- Converts a string to uppercase or lowercase.

        let text = "JavaScript";
        console.log(text.toUpperCase()); // Output: JAVASCRIPT
        console.log(text.toLowerCase()); // Output: javascript

4. `trim()`
- Removes whitespace from both ends of a string.

        let message = "   Hello, World!   ";
        console.log(message.trim()); // Output: "Hello, World!"

5. `slice(start, end)`
- Extracts a part of a string.


        let str = "JavaScript";
        console.log(str.slice(0, 4)); // Output: Java
        console.log(str.slice(-6));   // Output: Script

6. `substring(start, end)`
- Similar to slice(), but does not accept negative indices.

        let str = "JavaScript";
        console.log(str.substring(0, 4)); // Output: Java

7. `replace()`
- Replaces part of a string.

        let sentence = "I love JavaScript!";
        console.log(sentence.replace("JavaScript", "Python")); // Output: I love Python!

8. `replaceAll()`
- Replaces all occurrences of a substring.

        let text = "apple apple apple";
        console.log(text.replaceAll("apple", "orange")); // Output: orange orange orange

9. `split()`
- Converts a string into an array.


        let names = "Alice,Bob,Charlie";
        console.log(names.split(",")); // Output: ["Alice", "Bob", "Charlie"]

10. `concat()`
- Joins two or more strings.

        let firstName = "John";
        let lastName = "Doe";
        console.log(firstName.concat(" ", lastName)); // Output: John Doe

11. `includes()`
- Checks if a string contains a specific word.

        let sentence = "I love JavaScript";
        console.log(sentence.includes("JavaScript")); // Output: true

12. `startsWith() and endsWith()`
- Checks if a string starts or ends with a given substring.

        let text = "Hello, World!";
        console.log(text.startsWith("Hello")); // Output: true
        console.log(text.endsWith("!"));       // Output: true

