
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var noCamel = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  var dashesOnly = noCamel.replace(/[\s_-]/g, "-");
  var lowered = dashesOnly.toLowerCase();
  return lowered;

}

spinalCase('thisIsSpinalTap');
