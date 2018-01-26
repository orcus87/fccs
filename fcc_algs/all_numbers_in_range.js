/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/
function sumAll(arr) {
  var max = Math.max.apply(null,arr);
  var min = Math.min.apply(null,arr);
  var sumArr = [];
  for (var i=min;i<=max;i++){
    sumArr.push(i);
  }
  return sumArr.reduce(function(acc,cur){return acc+cur;});
}

sumAll([1, 4]);