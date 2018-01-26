/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  var arrF = [];
  var arrS = [];
  // Same, same; but different.
  arrF=arr1.filter(function(e){return arr2.indexOf(e) == -1;});
  arrS=arr2.filter(function(e){return arr1.indexOf(e) == -1;});
  newArr = arrF.concat(arrS);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
