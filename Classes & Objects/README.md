# JS Classes and Objects

- An object is a collection of key-value pairs where keys are strings and values can be any data type, including functions.

- An object can be created using the object literal syntax.

        const person = {
        name: "John Doe",
        age: 30,
        greet: function () {
            console.log(`Hello, my name is ${this.name}.`);
        }
        };

        console.log(person.name);  // Output: John Doe
        person.greet();            // Output: Hello, my name is John Doe.

- Methods in objects are functions that work on the object's properties using the `this` keyword.

        const car = {
        brand: "Toyota",
        model: "Camry",
        start: function () {
            console.log(`${this.brand} ${this.model} is starting...`);
        }
        };

        car.start();  // Output: Toyota Camry is starting...

- Objects in JS inherit properties and methods from a prototype.

        function Person(name, age) {
        this.name = name;
        this.age = age;
        }

        Person.prototype.greet = function () {
        console.log(`Hello, I'm ${this.name}.`);
        };

        const john = new Person("John", 28);
        john.greet();  // Output: Hello, I'm John.

## JS Classes

- Creating a class

        class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
        }

        const alice = new Person("Alice", 27);
        alice.greet();  // Output: Hello, my name is Alice.

- Creating Inheritance - A class can inherit properties and methods from another class using `extends`

        class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} makes a noise.`);
        }
        }

        class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks.`);
        }
        }

        const dog = new Dog("Buddy");
        dog.speak();  // Output: Buddy barks.

