let userInput: unknown;
let userName: string;

userInput = 21;
userInput = "jiyani";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(msg: string): never {
  throw { msg: msg };
}

generateError("error occured!");
