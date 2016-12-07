function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  function compareNumbers(a, b) {
    return a - b;
  }
  var sorted = arr.sort(compareNumbers);
  // Iterate through array
  for (var i in sorted) {
    if (num <= sorted[i]) {
      return sorted.indexOf(sorted[i]);
    }
  }
  return sorted.length;
}

getIndexToIns([2, 5, 10], 15);
