function addTogether() {

    var toSum = Array.from(arguments);

    function checkType(array) {
        if(array.every(function(element){
            return typeof element === "number";
        })) {
            return true;
        }
        else {
            return false;
        }
    }

    if (toSum.length > 2) {
        toSum.splice(2);
        if (checkType(toSum)) {
            return oneNum(toSum[0], toSum[1]);
        }
        else {
            return undefined;
        }
    }

    if (toSum.length < 2) {
        if (checkType(toSum)) {
            return twoArgs(toSum[0]);
        }
        else {
            return undefined;
        }
    }

    else {
        if (checkType(toSum)) {
            return oneNum(toSum[0], toSum[1]);
        }
        else {
            return undefined;
        }
    }

    function oneNum(providednum, othernum) {
        return providednum + othernum;
    }

    function twoArgs(x){
        return function(y){
            if(typeof y === "number") {
                return x + y;
            }
            else {
                return undefined;
            }
        };
    }

}

addTogether(2)(3);