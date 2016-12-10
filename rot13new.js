function rot13(str) { // LBH QVQ VG!
    var newString = [];
    for (var i in str) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            newString.push(str.charAt(i));
        } else {
            if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
                newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
            } else {
                newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
            }
        }
    }
    return newString.join("");
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");