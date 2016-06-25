var calc = function(userArgs) {
  var originalProblem = userArgs.split('');
  var result = userArgs.toString().split(/[+xps/%-]/).map(Number);

  var answer;
  var value1 = result[0];
  var value2 = result[1];

  var isInteger = function (result) {
    for (var i = 0; i < result.length; i++) { 
     if ( /^\d+$/.test(result[i]) === false)
        {return false;}
      else {return true;}
    } 
  };


 if (isInteger(result) === false) {
   answer = "Numbers only please!";
 } else {
    if (originalProblem.indexOf("+") >= 0) {
      answer = value1 + value2;
    } else if (originalProblem.indexOf("-") >= 0) {
      answer = value1 - value2;
    } else if (originalProblem.indexOf("x") >= 0) {
      answer = value1 * value2;
    } else if (originalProblem.indexOf("/") >= 0) {
      answer = value1 / value2;
    } else if (originalProblem.indexOf("%") >= 0) {
      answer = value1 % value2;
    } else if (originalProblem.indexOf("p") >=0) {
      answer = Math.pow(value1, value2);
    } else if (originalProblem.indexOf("s") >= 0) {
        answer = Math.sqrt(value1);
    } else {answer = "I don't know how to do that!";}
 }

 console.log(answer);

};