#! /usr/bin/env node

var userArgs = process.argv.slice(2);
var value1 = Number(userArgs[0]);
var value2 = Number(userArgs[2]);

var answer;

if (userArgs.indexOf("+") >= 0) {
  answer = value1 + value2;
} else if (userArgs.indexOf("-") >= 0) {
  answer = value1 - value2;
} else if (userArgs.indexOf("x") >= 0) {
  answer = value1 * value2;
} else if (userArgs.indexOf("/") >= 0) {
  answer = value1 / value2;
} else if (userArgs.indexOf("%") >= 0) {
  answer = value1 % value2;
} else if (userArgs.indexOf("^") >=0) {
  answer = Math.pow(value1, value2); 
} else if (userArgs.indexOf("sqrt") >= 0) {
  answer = Math.sqrt(value1);
} else {answer = "I don't know how to do that!"}

//console.log(answer);
console.log(answer);