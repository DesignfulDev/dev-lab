const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const addOneToOne = () => 1 + 1;

let result = timeFuncRuntime(() => {
  for (i = 100; i > 0; i--) {
    console.log(i);
  }
});
console.log(
  'Finished running the loop. Now we see how long it took in miliseconds.'
);

console.log(result);
