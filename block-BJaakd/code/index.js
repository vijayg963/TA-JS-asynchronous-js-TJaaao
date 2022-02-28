// 1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise Resolved!`);
  }, 1000);
}).then((value) => console.log(value));

// 2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`
let promiseTwo = new Promise((resolve, reject) => {
  reject(`Rejected Promise`);
}).catch((reject) => console.error(reject));

// 3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.
let promiseThree = new Promise((resolve, reject) => {
  reject(`Rejected Promise!`);
})
  .catch((reject) => console.error(reject))
  .finally(() => console.log(`Promise Settled!`));

// 4. What will be the output of the code below.

console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');
// Output:-
// A
// D
// C
// B

// 5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.
function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise Resolved in Wait function by given time ${time}ms`);
    }, time);
  }).then((value) => console.log(value));
}

wait(2000);

// 6. Do the following:

// - Create a new promise
// - Resolve with 21
// - Use `.then` and return adding `10` to the value you will get as parameter
// - Use `.then` and return adding `100` to the value you will get as parameter
// - Use `.then` and check if the value you get is greater than `100` throw new error with any message
// - Catch the error using `.catch`
let numPromise = new Promise((resolve, reject) => {
  resolve(21);
})
  .then((value) => {
    return value + 10;
  })
  .then((value) => {
    return value + 100;
  })
  .then((value) => {
    if (value > 100) {
      console.error(`Value is greter then 100`);
    }
  })
  .catch((error) => console.error(error));

// 7. Do the following:

// - Create a new promise
// - Resolve the promise with `['A']`
// - Use `.then` and concat `B` into the parameter and return
// - Use `.then` and return and object like `{0: 'A', 1: 'B'}`
// - Use `.then` and log the value

let promiseA = new Promise((resolve, reject) => {
  resolve([`A`]);
})
  .then((value) => {
    return value.concat('B');
  })
  .then((value) => {
    value.reduce((accu, cv, i) => {
      accu[i] = cv;
      return accu;
    });
  }, {})
  .then((value) => console.log(value));

// 8. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Chain `.then` on above and return `3` also check the value you get access to by logging
// - Chain `.then` on above and return `4` also check the value you get access to by logging

let first = new Promise((res, rej) => {
  res(1);
})
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return 4;
  });

// 9. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Use `.then` on `first` and return `3` also check the value you get access to by logging
// - Use `.then` on `first` and return `4` also check the value you get access to by logging

let firstB = new Promise((res, rej) => {
  res(1);
});
firstB.then((value) => {
  console.log(value);
  return '2';
});
firstB.then((value) => {
  console.log(value);
  return `3`;
});
firstB.then((value) => {
  console.log(value);
  return `4`;
});

// 10. Try to understand the difference between the problem 8 and 9. Write your observation.
// Answer:- Q-8:- In this case Value is return by funtion is change.
// Q-9:- In this case value remain same As the Value is taken due to Promise is done by once.

// 11. Do the following

// - Create a promise and resolve it with `John`
// - Use `.then` and return another promise that resolves with `Arya`
// - Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
// - Use `.then` to log the value

let name = new Promise((resolve, reject) => {
  resolve(`John`);
})
  .then((value) => {
    return Promise.resolve(`Arya`);
  })
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Bran`);
      }, 2000);
    });
  })
  .then((value) => console.log(value));
