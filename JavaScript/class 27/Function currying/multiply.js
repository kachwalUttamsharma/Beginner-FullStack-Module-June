/**
 * Currying is a func that takes one argument at a time and returns a new func expecting the 
 * next argument
 * mul(a,b,c) -> mul(a)(b)(c)
 * */ 

function mul(a,b,c) {
    return a*b*c;
}

function mulCurry(a) {
    return function (b) {
        return function (c) {
            return a*b*c;
        }
    }
}

console.log("Simple Func ", mul(2,2,3));
console.log("Curry Func ", mulCurry(2)(2)(3));
