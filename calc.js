#! /usr/bin/env node

var userArgs = process.argv.slice(2);
var spl = problem.split(/[+x/%-]/);
var result=spl.map(Number);

var notInteger = function (result) {
  for (var i = 0; i < result.length; i++) { 
   if ( /^\d+$/.test(result[i]) === true)
      {
            return true;
  }
};

var value1 = Number(userArgs[0]);
var value2 = Number(userArgs[2]);



var answer;
if (notInteger(result) === true) {
  console.log("Numbers only please");
} else {
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
    } else {answer = "I don't know how to do that!"}
}
//console.log(answer);
console.log(answer);