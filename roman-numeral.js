var conversions = [
	[1, "I"],
	[4, "IV"],
	[5, "V"],
	[9, "IX"],
	[10, "X"],
	[40, "XL"],
	[50, "L"],
	[90, "XC"],
	[100, "C"],
	[400, "CD"],
	[500, "D"],
	[900, "CM"],
	[1000, "M"]
];

var counter = 0;
var total = "";

function romanize(num) {
  var iterator = num;
  for (var i in conversions) {
	  if (conversions[i][0] > iterator) {
		  total += conversions[i-1][1];
		  counter += conversions[i-1][0];
		  iterator -= conversions[i-1][0];
		  romanize(iterator);
	  }
  }
  return total;
}

romanize(25);
