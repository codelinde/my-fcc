
function uniteUnique(arr) {
  var compareArr = [];
	var argsArr = Array.from(arguments);
	var merged = [].concat.apply([], argsArr);
	compareArr.push(merged[0]);
	for (var i = 1; i < merged.length; i++) {
	  if (compareArr.indexOf(merged[i]) > -1) {
	    merged.splice(i, 1);
	    i = i - 1;
	  }
  	compareArr.push(merged[i]);
  }
  return merged;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
