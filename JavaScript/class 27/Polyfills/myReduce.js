const arr = [1,2,3,4]
const sum = arr.reduce((accum, curr) => {
    return accum+curr;
}, 0);

console.log(sum);

function cb(accum, curr) {
    return accum+curr;
}

Array.prototype.myReduce = function(cb, intialValue) {
    let accumlator = intialValue;
    const arr = this;
    for(let i=0; i<arr.length; i++) {
        accumlator = cb(accumlator, arr[i]);
    }
    return accumlator;
}

console.log(arr.myReduce(cb, 0));

