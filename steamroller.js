
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattenedArr = [];

  flattenIt(arr);

  function flattenIt(array) {
    array.forEach(function(item) {
      if (Array.isArray(item)) {
        flattenIt(item);
      }
      else {
        flattenedArr.push(item);
      }
   });
  }
  return flattenedArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
