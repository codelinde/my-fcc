
function destroyer(arr) {
// If arguments 2 and 3 are present in argument 1
// delete those arguments from argument 1's array

  var args = Array.prototype.slice.call(arguments);

  args.splice(0,1);

  function isPres(element) {
    return args.indexOf(element) < 0;
  }
  
  return arr.filter(isPres);
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
