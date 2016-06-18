#! /usr/bin/env node
var answer;
var userArgs = process.argv.slice(2);
var mathThings = {"+": answer=value1 + value2, "-": answer=value1 - value2};
var value1 = Number(userArgs[0]);
var value2 = Number(userArgs[2]);




for (var key in mathThings) {
  if (userArgs.indexOf(key) >= 0) {
    answer=mathThings[key];
  }
}
//console.log(answer);
console.log(answer);