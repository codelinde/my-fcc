// noprotect
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

    var secondCounter = limit;
    var passed;

    while (true) {                                  
        passed = newArr.every(function(item) {   
            return secondCounter % item === 0;            
        });
        if (passed) {
            return secondCounter;                         
        } 
        else {
            secondCounter++;                             
        }
    }

}


smallestCommons([1,5]);
