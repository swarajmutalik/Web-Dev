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
    console.log("Eating");
  }

  jumps() {
    console.log("Jumping");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("Object is created and this is Lion class");
  }

  eats() {
    super.eats();
    console.log("Lion is eating");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
