function sumPrimes(num) {

    // Set up empty array to push incremented primes to
    var primesArr = [];

    // Counter starting at 2 to iterate through numbers leading up to num
    var counter = 2;

    // Function to check if number is prime
    function primality(n) {

        if(n === 1) {
            return false;
        }
        else if(n === 2) {
            return true;
        }
        else {
            for(var p = 2; p < n; p++) {
                if(n % p === 0) {
                    return false;
                }
            }
            return true;  
        }
    }

    // Check whether each number leading up to num is prime
    while(counter <= num) {
        if(primality(counter) === false) {
            counter++;
        }
        else {
            primesArr.push(counter);
            counter++;
        }
    }

    // Use reduce to add up values of array and return
    return primesArr.reduce(function(a, b) {
        return a + b;
    }, 0);

}

// Test cases
sumPrimes(10);
sumPrimes(17);
sumPrimes(977);
