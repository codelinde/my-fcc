
function myReplace(str, before, after) {
	var aftArr = after.split("");
	var aftArrChunk = aftArr.splice(1).join('');
	var conjoined = '';
	if (before[0] == before[0].toUpperCase()) {
		var aftUp = after[0].toUpperCase();
		var conjoined = aftUp + aftArrChunk;
	}
	else {
		var aftLow = after[0].toLowerCase();
		var conjoined = aftLow + aftArrChunk;
	}
	var replaced = str.replace(before, conjoined);
	return replaced;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
