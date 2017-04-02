
function dropElements(arr, func) {

    var testArr = arr;
    
    var iterations = arr.length;

    for (var i = 0; i < iterations; i++) {
        if (func(testArr[0])) {
            return testArr;
        }
        else {
            testArr = testArr.slice(1);
        }
    }
    return testArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
