// Infinite Currying

// add(2)(3)(5)......()

// function(x,y) -> return x+y

function add(a) {
    return function(b){
        if(b == undefined) {
            return a;
        } else {
            return add(a+b);
        }
    }
}

console.log(add(2)(3)(5)());

// add(2)(3) -> function(5)(5) -> function(10)()

// partial application
function sum(a) {
    return function(a,b) {
        return a+b;
    }
}