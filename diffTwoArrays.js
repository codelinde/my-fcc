function diffArray(arr1, arr2) {
  var newArr = [];
  for (var element1 in arr1) {
  	if (arr2.indexOf(arr1[element1]) < 0) {
  		newArr.push(arr1[element1]);
  	}
  }
  for (var element2 in arr2) {
    if (arr1.indexOf(arr2[element2]) < 0) {
      newArr.push(arr2[element2]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);