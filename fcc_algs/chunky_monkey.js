/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var resArr = [];
  var start = 0;
  var temp = [];
  for (var i=0; i<Math.ceil(arr.length/size); i++) {
    temp = arr.slice(start,start+size);
    resArr.push(temp);
    start=start+size;
  }
  return resArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
