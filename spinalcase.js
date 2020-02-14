
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var noCamel = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  var dashesOnly = noCamel.replace(/[\s_-]/g, '-');
  var lowered = dashesOnly.toLowerCase();
  return lowered;
  
  //Could also be written on one line:
  //return str.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/[\s_-]/g, '-').toLowerCase();

}

spinalCase('thisIsSpinalTap');
