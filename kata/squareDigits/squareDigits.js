/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/

module.exports = function(num) {
  let tempArray = [];

  num.toString().split('').forEach((element, index) => {
    tempArray[index] = (element * element);
  });

  return (parseInt(tempArray.join("")));
}


/* 

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
}

Using map instead of forEach would have done what I wanted with a return and didn't have the need for a tempArray.

*/