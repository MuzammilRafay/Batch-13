// array methods
// filter
// map
// forEach

//Data Types
//string
//number
//array
// object
// boolean

// Oop stands for object oriented programming
// in javascript everything is object

// const person = {
//   name: "Muzamil",
//   age: 28,
//   job: "Senoir Software Engineer",
// };

// console.log(person);

// const person = ["Xyz", "age", "Job"];

// console.log(typeof person); // array is object object

// const person = new String("AAA");
// console.log(typeof person); //

// new Number()
// new Boolean()

class Person {
  constructor(name, age, job) {
    //when your class is inialize we have this variable from argument
    // this = current class
    this.name = name;
    this.age = age;
    this.job = job;
  }

  print() {
    console.log(
      `Hello my name is ${this.name} & my age is ${this.age} & my job is ${this.job}`,
    );
  }
}

const personClassInUse = new Person("John", 20, "Developer"); //initialize class
personClassInUse.print(); //class k methods ko use karlia

/*
there are four pillars


1-Encapsulation = properties of class/functions
2-Inheritance = Wirasat
3-Abstraction = hidden complex logics
4-Polymorphism = one class inherit in to many clases

*/

/*
protype inheritance (wirasaat)

__ = dunder
const a = []
a.__proto__

const b= []
b.__proto__

const c= []
b.__proto__



*/

// 1.Encapsulation

// Keep data (properties) and methods together inside a class.

class Person {
  constructor(name) {
    this.name = name; //properties
  }

  introduce() {
    //methods
    console.log(this.name);
  }
}

// 2. Inheritance  (Wirasat)

// class Animal {
//   eat() {
//     console.log("Eating");
//   }
// }

// class Dog extends Animal {}

// const dog = new Dog();
// dog.eat();

// 3. Abstraction

//Hide complex logic and show only what is needed.
// car.start();

class Animal {
  sound() {}
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

// 4. Polymorphism
// Same method name, different behavior.

class Animal {
  sound() {}
}

class Dog extends Animal {
  sound() {
    //override method
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}
