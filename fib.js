
function sumFibs(num) {
  var fibArr = [0, 1];
  var i = 0;
  var j = 1;
  var final = 0;
  while (fibArr.length <= num) {
    fibArr.push(fibArr[j] + fibArr[i]);
    j++;
    i++;
  }
  for (var n in fibArr) {
    if (fibArr[n] % 2 > 0 && fibArr[n] <= num) {
    final += fibArr[n];
    }
  }
  return final;
};


sumFibs(4);
