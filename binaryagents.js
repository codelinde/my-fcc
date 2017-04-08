function binaryAgent(str) {
   var binArray = str.split(' ');
   var decArray = [];
   var charArray = [];
   binArray.forEach(function(element){
       decArray.push(parseInt(element, 2));
   });
   decArray.forEach(function(element){
       charArray.push(String.fromCharCode(element));
   });
   return charArray.join('');
   
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");