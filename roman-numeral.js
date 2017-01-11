var conversions = {
	1: "I",
	2: "II",
	3: "III",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M"
}

function convertToRoman(num) {
	if (num == 0) {
		return "Please enter a number between 1 and 3,999.";
	}
	else if (num > 3999) {
	  return "Please enter a number between 1 and 3,999.";
	}
	else {
		if (num < 10) {
			if (num < 4) {
				var finalNum = conversions[num];
			}
			if (num > 3) {
				// Apply generic logic which should apply to all cases
			}
		}
		else if (num > 9) {
			// Convert double-digit number to string
			var strNum = num.toString();
			// Split string into an array
			var arrNum = strNum.split('');
		}
	}



 return finalNum;
}

convertToRoman(3);