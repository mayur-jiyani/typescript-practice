// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// let result: (a: number, b: number) => number;
// result = add;

// console.log(result(1, 23));

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const sum = num1 + num2;
  cb(sum);
}

addAndHandle(2, 4, (result) => {
  console.log(result);
});
