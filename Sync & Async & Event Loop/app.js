// Synchronous
// Code runs line by line

// console.log("html/css");
// console.log("js");
// console.log("react js");
// console.log("react native");

//Asynchronous programming
//we have to wait some thing in code
// console.log("html/css");
// setTimeout(() => {
//   console.log("js");
// }, 0);
// // }, 1000);
// console.log("react js");
// console.log("react native");

//is js is asyncronous by default ?
//answer is no

//thread = how much task that will handle in js

//javascript is single thread

//thread means one worker at a time








// ================================================================================================
// There are three ways to convert Asynchronous code in js

// Method 1: Callback Function/Web Apis
// setTimeout(() => {
//   console.log("Data received");
// }, 2000);

// console.log("Loading...");

// setTimeout callback function/webapi use hori hai
// ƒ setTimeout() { [native code] }

// Method 2: Promise

// promise has 3 states:
// Pending / Waiting
// Resolved / Success
// Rejected / Failed

const doSomething = new Promise(function (resolve, reject) {
  const success = false;
  if (success) {
    resolve("Work Completed");
  } else {
    reject("Work failed");
  }
});

// then = phir = success par kiaa ayaa
// catch = reject par kiaa ayaa
doSomething
  .then(function (data) {
    console.log("Your promise success message :", data);
  })
  .catch(function (data) {
    console.log("Your Promise rejection message: ", data);
    // console.error(data, ": Your Promise rejection message");
  });

// Method 3: Async Await
// const getData = function () {
//   console.time();
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(function (success) {
//       console.log(success, "api wala");
//       console.log(success.json(), "api wala");
//     })
//     .catch(function (rejection) {
//       console.log(rejection, "api wala");
//     });
//   console.timeEnd();
// };
// getData();

const getData = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json(); //code ko json me convert

  console.log(data);
};
getData();

// why use async await

// we have problem when we have multiple promises

function first() {
  return Promise.resolve("HTML");
}

function second() {
  return Promise.resolve("CSS");
}

function third() {
  return Promise.resolve("JavaScript");
}



// function learn() {
//   first()
//     .then(function (one) {
//       console.log(one);

//       return second();
//     })
//     .then(function (two) {
//       console.log(two);

//       return third();
//     })
//     .then(function (three) {
//       console.log(three);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
// vs
//now you can manage multiple promises easily without using then catch so that's why we use async await
await function learn(){
  const one = await first()
  const second = await second()
  const third = await third()

  console.log(one);
  console.log(two);
  console.log(three);
}


learn();

// 3 Ways to Handle Asynchronous Code
// 1.Callback Function/Webapi
// 2.Promises
// 3.Async/Wait

// in ways se apka code asynrnously convert hosakta hai

// ================================================================================================