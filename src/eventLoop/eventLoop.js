/*
  Order of execution:
    1. process.nextTick queue
    2. promises microtask queue
    3. macrotask queue
*/

let i = 0;

const first = () => console.log('first');
const second = () => {
  process.nextTick(() => console.log('tick in second'));
  console.log('second');
};
const third = () => console.log('third');

Promise.resolve('promise').then((message) => {
  process.nextTick(() => console.log('tick in promise'));
  console.log(message);
});

// order of execution varies
setImmediate(() => console.log('immediate', ++i));
setTimeout(() => console.log('timeout', i), 14);

first();
second();
third();
