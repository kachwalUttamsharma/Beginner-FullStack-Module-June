// producers
const promise = new Promise(function(resolve, reject) {
    const a = 5;
    const b =5;
    if(a === b) {
        resolve("Yes both A and B are equal");
    } else {
        reject("No they are not equals");
    }
})

console.log(promise);
// consumers
promise.then(function(data) {
    console.log(data);
})
promise.catch(function(data) {
    console.log(data);
})
