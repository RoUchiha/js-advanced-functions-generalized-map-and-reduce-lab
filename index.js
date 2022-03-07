// Add your functions here

function map(array, func) {
    let newArray = [];
    for (const int of array) {
        newArray.push(func(int))
    }
    return newArray
}


function reduce(array, func, start) {
    let value;
    if (start) {
        value = start;
        for (let i = 0; i < array.length; i++) {
            value = func(array[i], value);
        }
        return value;
    } else {
        value = array[0];
        for (let i = 1; i < array.length; i++) {
            value = func(array[i], value);
        }
        return value;
    }
}