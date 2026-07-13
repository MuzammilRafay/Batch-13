//var , let & const

// {} = scope
// if(){}
// function(){}
// loop(){}

// 1.Let
//let variable work inside of the scope

{
  let www = "aa";
  // console.log(www);
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

// console.log(insideOfVarCustomVariable2); //it will work

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

// console.log(user?.addres?.street);
// alert(user.address ? user.address.street : undefined); //if we do manually it will become something like this

//Nullish coalescing operator '??'
let userTwo = "something";

let userNewVariable = userTwo ?? "anoymouse";
//phle value ko consider karega hamesha

// console.log(userTwo !== null && userTwo !== undefined ? "anoymouse" : "");

// console.log(userNewVariable);

//Comparison with || (true or false)

let firstNameTwo = null;
let lastNameTwo = null;
let nickName = "Supercoder";

// 0 = false
// 1 = true

height = 0;
// console.log(height ?? 100); // 0
// console.log(height || 100); // 100

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// Rest operator

function check(firstParam, ...restParamName) {
  // console.log(firstParam, restParamName);
  return { firstParam, restParamName };

  // output -> firstParam=1 restParamName=[2, 3, 4, 5, 6, 7, 8]
}

check(1, 2, 3, 4, 5, 6, 7, 8);
// Math.min(1, 2, 3, 5, 6, 7, 8, 9, 10);

//destructuring with array

const vehicles = ["mustang", "f-150", "expedition"];
// bad paractice
// const car = vehicles[0]; //mustang
// const truck = vehicles[1]; //f150
// const suv = vehicles[2]; //expedition
// good paractice
const [car, truck, suv] = vehicles;

//destructuring with objects
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

// const { brand, model, type } = vehicleOne;

const { brand: myOwnBrandName, model, type, ...restKeys } = vehicleOne;

// myOwnBrandName

//Array Methods
// Array of object
const products = [
  {
    id: 1,
    name: "Product One",
    price: 100,
  },
  {
    id: 2,
    name: "Product Two",
    price: 200,
  },
  {
    id: 3,
    name: "Product Three",
    price: 300,
  },
  {
    id: 4,
    name: "Product Four",
    price: 400,
  },
];

// console.log(products, "products");

// console.time();
products.forEach(function (singleProduct) {
  // console.log(singleProduct);
});
// console.timeEnd();

/*

-Loop Methods
map
filter
forEach
some
every
find
findIndex
reduce

-Array Changes method
push
unshift
pop
shift
slice
*/

const a = [];
a.push("aa"); //using push we can add values in the array but in the end
a.push("bb"); //using push we can add values in the array but in the end
// a.pop(); //last index ko remove kardega

a.unshift("cc"); //Adds item(s) to the beginning

// console.log(a, "a");

// pop = Removes the last item
// unshift = Removes the first item
a.pop(); //it will remove the "bb"
a.shift(); //it will remove the "cc"

// Slice
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4); //1st se lekar 4 index tak sab remove kardo

// console.log(result, "result");
// console.log(numbers, "numbers");

// map
// it will return u the new array

console.log(products);

productUpdatedArray = products.map((single) => {
  // return "SCD";
  return {
    productName: single.name,
    // productName: single.id,
  };
});

// productUpdatedArray = products.map((single) => ({ productName: single.id }));

console.log(productUpdatedArray, "productUpdatedArray");

//wrong way to create new arrays
// let productNewArray2 = [];
// products.forEach((single) => {
//   productNewArray2.push({
//     productNameAAAA: single.name,
//   })
// });

//Filter

//it will return the array depend on your condition
productNewArray = products.filter((single) => single.price > 200);

// Find
productNewArray = products.find((single) => single.id === 1);
// output
// {id: 1, name: 'Product One', price: 100}

//Find Index
productNewArray = products.findIndex((single) => single.id === 1);

// we can use array methods like chaining methods
productNewArray = products
  .map((single) => single.id)
  .filter((single) => single > 2)
  .find((single) => single == 3);
console.log(productNewArray, "productNewArray");

//array every (return boolean)
//agar sab ki condition true hein to true return karta hai
productNewArray = products.every((singleProduct) => singleProduct.price > 200);
// output
// true

//agar ksi ek ki  condition true hein to true return karta hai warna false
productNewArray = products.some((singleProduct) => singleProduct.price > 200);
// output
// true

//reduce
// 1st param me condition return hogi jo jama karna hai
//2nd me ap doge accumulator = jama karne wala

const totalPrice = products.reduce(
  (zeroWaliValue, single) => single.price + zeroWaliValue,
  0,
);

// 0 + 100
// 100 + 200 = 300
// 300 + 300 = 600
// 600 + 400 = 1000

console.log(totalPrice, "totalPrice");
