// can you implement your custom function which works in same way as
// it works in prototype
const arr = [1,2,3];

console.log(arr.map((num, i, arr) => {
    return num*i;
}))
// map 
Array.prototype.myMap = function(cb) {
    let res = [];
    const arr = this;
    for(let i=0; i<arr.length; i++) {
        res[i] = cb(arr[i], i, arr);
    }
    return res;
}

console.log(arr.myMap((num, i, arr) => {
    return num*i;
}))