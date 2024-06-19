// let obj = {
//   a: 1,
//   b: "Swaraj",
// };

// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }

  eats() {
    console.log("Eats");
  }

  jumps() {
    console.log("Jumps");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("Object is created and he is a lion");
  }
  eats() {
    console.log("Kha rha hu");
  }
}

let a = new Animal("Swaraj");
console.log(a);

let l = new Lion("Lion");
console.log(l);
