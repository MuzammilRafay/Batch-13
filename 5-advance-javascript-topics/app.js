//var , let & const

// {} = scope
// if(){}
// function(){}
// loop(){}

// 1.Let
//let variable work inside of the scope

{
  let www = "aa";
  console.log(www);
}

// console.log(www, "www"); //error

// 2.Const
// variable work inside of the scope
// you cannot re assign the value (change nai hota)

const companyName = "xyz";

// companyName = "aa"; //error (Assignment to constant variable)

// 3.var
// bad paractice
// old way
// inside of the funtion ho to scope consider karega warna nai

function nasdasd() {
  var insideOfVarCustomVariable = "asdasd";
}

// console.log(insideOfVarCustomVariable); // error

// if this scope if if else & foreach other things
// not funtions so the scope will not worrk

if (true) {
  var insideOfVarCustomVariable2 = "asdasd";
}

console.log(insideOfVarCustomVariable2); //it will work

//template literal

const firstName = "Muhammad";
const lastName = "Muzammil";

// const fullName = firstName + " " + lastName;

const fullName = `
${firstName}
${lastName}

asdfasdf
a
sdf
as
fsdf

${lastName}
`;

//primitive vs reference
//Object & Array are reference type

const objectOne = { name: "muzammil" };
// const objectTwo = objectOne; //objectOne ka reference dedia objectTwo
const objectTwo = { ...objectOne }; //spread operator shallow copy (reference assign nai hota)
objectTwo.name = "musaddiq"; //objectTwo me change karoge to actual me ap objectOne me hi change karre ho

// spread operator use hota copy k liye

// console.log(objectOne.name); //musaddiq
// console.log(objectTwo.name); //musaddiq

//Spread Operator = ... in array / object

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, 10, 30, ...numbersTwo];

//with objects

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const combineObject = { ...myVehicle, ...updateMyVehicle };

// https://javascript.info/optional-chaining

//Optional chaining '?.'

let user = {};

// console.log(user.address.street); //it will throw the error

console.log(user?.addres?.street);
// alert(user.address ? user.address.street : undefined); //if we do manually it will become something like this

//Nullish coalescing operator '??'
let userTwo = "something";

let userNewVariable = userTwo ?? "anoymouse";
//phle value ko consider karega hamesha

// console.log(userTwo !== null && userTwo !== undefined ? "anoymouse" : "");

console.log(userNewVariable);

//Comparison with || (true or false)

let firstNameTwo = null;
let lastNameTwo = null;
let nickName = "Supercoder";

// 0 = false
// 1 = true

height = 0;
console.log(height ?? 100); // 0
console.log(height || 100); // 100

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
