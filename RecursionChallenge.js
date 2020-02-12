//RECURSION CHALLENGE

/*Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.*/

//RECURSION SOLUTION

function sum(arr, n) {
  if (n < 0) {
    return 0;
  }
  else {
    return sum(arr, n-1) + arr[n];
  }
}

sum([2,3,4],2)

// Expected result: 9

/*Illustration:

STARTING WITH n = 2
n is not less than 0
Return sum([2,3,4], 1) + 4
       VVVVVVVVVVVVVVV
       STARTING WITH n = 1
	   n is not less than 0
	   Return sum([2,3,4],0) + 3
              VVVVVVVVVVVVV
			  STARTING WITH n = 0
              n is not less than 0
			  Return sum([2,3,4],-1] + 2
			         VVVVVVVVVVVVVVV
				     n IS less than 0! Return 0!

NOW RESOLVE
0 + 2 = 2
2 + 3 = 5
5 + 4 = 9

The key here is that there needs to be a point where a concrete value can be returned so that the recursion can actually resolve; in this case 0.
Cases then resolve in reverse order. */

