
function convertHTML(str) {
  // &colon;&rpar;
  var strCopy = str;
  for (var i in str) {
  	switch (strCopy[i]) {
  		case "&":
  			str = str.replace("&", "&amp;");
  			break;
  		case "<":
  			str = str.replace("<", "&lt;");
  			break;
  		case ">":
  			str = str.replace(">", "&gt;");
  			break;
  		case '"':
  			str = str.replace('"', "&quot;");
  			break;
  		case "'":
  			str = str.replace("'", "&apos;");
  			break;
  		default:
  			break;
  	}
  }
  return str;
}

convertHTML("Dolce & Gabbana");
