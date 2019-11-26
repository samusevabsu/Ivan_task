function avers(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    let aver = sum / arr.length;
    return aver;
};
avers([10, 90, 20, 39, 8]);

function min(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
min([1, 2, 3]);

debugger;

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
max([1, 2, 3]);

function everything(arr) {
    let average = avers(arr);
    let minim = min(arr);
    let maxim = max(arr);
    let finish = {
        av: average,
        mi: minim,
        ma: maxim,
    };
    return finish;
}

let arr = [1, 2, 3, -4];
let result = arr.map(function (item) {
    if (item < 0) {
        let negotive = item * item;
        return negotive;
    } else {
        let positive = item * 3;
        return positive;
    }
});