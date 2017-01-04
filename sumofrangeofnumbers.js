function sumAll(arr) {
	var newArr = [];
	var sortedArr = arr.sort(function(a, b) {
		return a - b;
	});
	while (sortedArr[0] <= sortedArr[1]) {
		newArr.push(sortedArr[0]++);
	}
	var reducedArr = newArr.reduce(function(a, b) {
		return a + b;
	}, 0);
	return reducedArr;

}

sumAll([1, 4]);