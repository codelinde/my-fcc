function chunkArrayInGroups(arr, size) {
  
  // Make a new array to store pushed values
  var newArray = [];
  
  // For each item in the array, push the slice between itself and itself +size into newArray
  for (var i=0; i < arr.length; i+=size) {
    newArray.push(arr.slice(i,(i + size)));
  }
  
  // Once iteration is done, return the new array
  return newArray;
}

// Test case
chunkArrayInGroups(["a", "b", "c", "d"], 2);
