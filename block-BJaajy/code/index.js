// - Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

// let promiseOne = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve('First');
//   }, 1000)
// );
// let promiseTwo = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve('Second');
//   }, 2000)
// );
// let promiseThree = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve('Third');
//   }, 3000)
// );
// let promiseFour = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve('Four');
//   }, 4000)
// );
// let promises = Promise.all([
//   promiseOne,
//   promiseTwo,
//   promiseThree,
//   promiseFour,
// ]).then(console.log);

// - Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.
let users = ['getify', 'gaearon', 'AArnott', 'subtleGradient', 'piranha'];

Promise.all(users.map((user) => fetch(`https://api.github.com/users/${user}`)))
  .then((info) => info.map((resp) => resp.json()))
  .then((response) =>
    Promise.all(response).then((resp) =>
      resp.forEach((d) => console.log(d.followers))
    )
  );
// let allUser = users.forEach((user) => {
//   fetch(`https://api.github.com/users/${user}`)
//     .then((res) => res.json())
//     .then((info) => {
//       console.log(info.followers);
//     });
// });

// - Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

//   - https://random.dog/woof.json
//   - https://aws.random.cat/meow

// let one = fetch(`https://random.dog/woof.json`).then((res) => res.json());

// let two = fetch(`https://aws.random.cat/meow`).then((res) => res.json());

// Promise.race([one, two]).then((value) => console.log(value));

// - Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled([one, two, three]).then(console.log);

Promise.all([one, two, three]).then(console.log); // Due to two is reject so it's not working.

// - What will be the output of the following code snippet? How much time will it take for the promise to resolve?

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

// 1000ms
