
function whatIsInAName(collection, source) {
  // What's in a name?
  var sourceArr = Object.keys(source);
  var newArr = [];
  // Only change code below this line
  for (var i in sourceArr) {
    if (collection.hasOwnProperty(i)) {
      newArr.push(i);
  	}
  
  }
  // Only change code above this line
  return newArr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" },{ first: "Mercutio", last: null },{ first: "Tybalt", last: "Capulet" }],{ last: "Capulet" });
