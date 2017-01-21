
function pairElement(str) {
  var bigArr = [];
  var newArr = [];
  for (var i in str) {
    bigArr.push(str[i]);
    if(str[i] == 'A') {
      bigArr.push('T');
    }
    else if(str[i] == 'T') {
      bigArr.push('A');
    }
    else if(str[i] == 'G') {
      bigArr.push('C');
    }
    else if(str[i] == 'C') {
      bigArr.push('G');
    }
  }
  
  while (bigArr.length > 0) {
     newArr.push(bigArr.splice(0,2));
  }
  return newArr;
}

pairElement("GCG");
