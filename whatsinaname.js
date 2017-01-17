

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceProp = Object.keys(source);
  for(var i in sourceProp) {
  	if(collection[i].hasOwnProperty(sourceProp)) {
  		if(collection[i][sourceProp] == source[sourceProp]) {
  			arr.push(collection[i]);
  		}
  	}
  }
  
  // Only change code above this line
  return arr;
}


whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
