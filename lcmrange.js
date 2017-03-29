
function smallestCommons(arr) {

    var sortedArgs = arr.sort(function(a, b) {
        return a - b;
    });

    var newArr = [];

    var counter = sortedArgs[0];

    var limit = sortedArgs.reduce(function(a, b) {
        return Math.max(a, b);
    });
    
    newArr.push(counter);

    while(counter < limit) {
        counter++;
        newArr.push(counter);
    }

    var lowestPossible = limit;

    var flag = true;

    while(flag) {
        function isDivisible(element) { 
            return element % lowestPossible === 0;
        }
        if (newArr.every(isDivisible)) {
            return lowestPossible;
            flag = false;
        }
        else {
            lowestPossible++;
        }
    }

}


smallestCommons([1,5,7]);
