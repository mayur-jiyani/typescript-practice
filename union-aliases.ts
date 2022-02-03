type Combinable = number | string;

function add(num1: Combinable, num2: Combinable) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return num1.toString() + num2.toString();

  //   return +num1 + +num2;
}

console.log(add(11, 23));
console.log(add("mayur", "jiyani"));
