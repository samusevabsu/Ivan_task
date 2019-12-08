function sumNegativePositive(array) {
    let object = {
        pos: 0,
        neg: 0
    };
    let result = array.reduce(function (object, currentElement) {
        if (currentElement > 0) {
            object.pos = object.pos + currentElement;
            return object;
        } else {
            object.neg = object.neg + currentElement;
            return object;
        }
    }, object);
    return result;
};