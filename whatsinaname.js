
function whatIsInAName(collection, source) {
	var srcKeys = Object.keys(source);
	return collection.filter(function(collItem){
		return srcKeys.every(function(keyItem){
			return collItem[keyItem] == source[keyItem];
		})
	})

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
