
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceProp = Object.keys(source);
  for(var i in collection) {
  	if(collection[i].hasOwnProperty(sourceProp)) {
  		if(collection[i][sourceProp] == source[sourceProp]) {
  			arr.push(collection[i]);
  		}
  	}
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
