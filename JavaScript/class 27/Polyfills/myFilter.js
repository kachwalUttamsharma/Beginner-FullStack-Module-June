function isEven(x) {
    return x%2 == 0
}
function isodd(x) {
    return x%2 != 0
}

const arr = [2,4,5,9,16]
// const evenOp = arr.filter(isEven);
// const oddOp = arr.filter(isodd);

// console.log(evenOp);
// console.log(oddOp);

Array.prototype.myFilter = function(cb) {
    let res = [];
    const arr = this;
    for(let i=0; i<arr.length; i++) {
        if(cb(arr[i])) {
            res.push(arr[i]);
        } 
    }
    return res;
}

const evenOp = arr.myFilter(isEven);
const oddOp = arr.myFilter(isodd);

console.log(evenOp);
console.log(oddOp);