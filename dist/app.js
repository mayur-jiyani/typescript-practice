"use strict";
let userInput;
let userName;
userInput = 21;
userInput = "jiyani";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(msg) {
    throw { msg: msg };
}
generateError("error occured!");
