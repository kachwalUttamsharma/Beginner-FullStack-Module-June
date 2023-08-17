// function sum3(a,b,c) {
//     console.log(a+b+c);
// }
//sum3(1,2,3)

// convert function of n argument to n functions
//sum3(1,2,3) => sum3(1)(2)(3)


function sum3(a) {
    return function(b) {
        return function(c) {
            console.log(a+b+c);
        }
    }
}

// const firstFunc = sum3(a); 
// // function(b) {} + closure (lexical env which have value a)
// const secondFunc = firstFunc(b); 
// // function(c) {} + closure (lexical env which have value a) 
// // + closure (lexical env which have value b)
// secondFunc(c);

sum3(1)(2)(3);