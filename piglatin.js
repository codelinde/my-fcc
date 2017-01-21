
function translatePigLatin(str) {
  // Create 'ay' string
  var ay = 'ay';
  // Create 'way' string
  var way = 'way';
  // Create vowel string
  var vowels = "aeiou";
  
  // Check to see if the first letter of string is a vowel
  if (vowels.indexOf(str[0]) != -1) {
    // If it is, add way to the end of the word
  	return str + way;
  }
    // If it is not,
  else {
      // Iterate through str until a vowel is found
  	for (var letter in str) {
  		if (vowels.indexOf(str[letter]) != -1) {
      // Once a vowel is found, take the preceding letters, and add them to 'ay'
      		var cons = str.substr(0, letter);
      		var noCons = str.substr(letter);
      		return noCons + cons + ay;
  		}
  	}
  }
}

translatePigLatin("consonant");
