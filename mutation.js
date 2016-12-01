/* Return true if the string in the first element of the array contains all of the letters
of the string in the second element of the array. */
function mutation(arr) {

  // Create an empty array to store new array values
  var newArray = [];
  
  // Push lowercase versions of array elements to new array
  for (var i in arr) {
    newArray.push(arr[i].toLowerCase());
  }
  
  // For each letter in the second word
  for (var n in newArray[1]) {
    // If the first word does not contain that letter, return false
    if (newArray[0].indexOf(newArray[1][n]) < 0) {
      return false;
    }
  }
  // If no false result is found, return true
  return true;
}
  
// Test case  
mutation(["hello", "Hello"]);
