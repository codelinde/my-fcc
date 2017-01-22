
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var missing = '';
  // Start iterating through alphabet on the letter the str starts with
  var alphIndx = alphabet.indexOf(str[0]);
  for(var i = alphIndx; i < str.length; i++) {
  	// Adjust for index of alphabet
    if(str[i] != alphabet[i + alphIndx]) {
    	missing += alphabet[i + alphIndx];
    	return missing;
    }
  }
  return undefined;
}

fearNotLetter("abce");
