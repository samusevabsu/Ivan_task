function sumNegative(array) {
    let result = array.reduce(function (previous, current) {
        if (current > 0) {
            return previous;
        }

        return previous + current;
    }, 0);
    return result;
};

function sumPositive(array) {
    let result = array.reduce(function (previous, current) {
        if (current < 0) {
            return previous;
        }

        return previous + current;
    }, 0);
    return result;
};

function positiveNegativeAver(arr) {
    let positive = sumPositive(arr);
    let negative = sumNegative(arr);
    let property = {
        pos: positive,
        neg: negative,
    };
    return property;
}