
function smallestCommons(arr) {
    // sort arguments from smallest to largest
    var sortedArgs = arr.sort(function(a, b) {
        return a - b;
    });

    // create empty array to flesh out digits between args
    var newArr = [];

    // set counter to first arg
    var counter = sortedArgs[0];

    // set limit to second arg
    var limit = sortedArgs[1];
    
    // push the first arg to the new array
    newArr.push(counter);

    // fill out digits inbetween 
    while(counter < limit) {
        counter++;
        newArr.push(counter);
    }
    
    // reverse array to check if last two digits are correct answer
    var reversedArr = newArr.slice().reverse();

}


smallestCommons([1,5]);
