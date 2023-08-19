/**
 * Currying is a func that takes one argument at a time and returns a new func expecting the 
 * next argument
 * sum(a,b,c) -> sum(a)(b)(c)
 * */ 

function sum(a,b,c) {
    return a+b+c;
}

function sumCurry(a) {
    return function (b) {
        return function (c) {
            return a+b+c;
        }
    }
}

console.log("Simple Func ", sum(1,2,3));
console.log("Curry Func ", sumCurry(1)(2)(3));
