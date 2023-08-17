// function Parent() {
//     const a = 10;
//     return function child() {
//         let b = 20;
//         function grandChild() {
//             console.log(a+b); // 110
//         }
//         b = 100;
//         grandChild();
//     }
// }
// Parent()();

// GEC -> Parent (now is returned)
// GEC -> Child


// child -> memory -> (local scope variable inside function) + lexical environment

// write a logic which can print 1-10 after 1sec each 
//  1 2 3 4 5 6 7 8 9 10 

// function Timer() {
//     for(var count = 1; count<=10; count++) {
//         setTimeout(function () {
//             console.log(count);
//         }, 1000)
//     }
// }
// Timer();

// function Timer() {
//     for(let count = 1; count<=10; count++) {
//         setTimeout(function () {
//             console.log(count);
//         }, 1000)
//     }
// }
// Timer();

function Timer() {
    for(var count = 1; count<=10; count++) {
        function child(count) {
            // local scope -> closure for setimeout which will have count unique each time
            setTimeout(function () {
                console.log(count);
            }, 1000)
        }
        child(count); 
    }
}
// we are not referring to changing variable instead we are refeering to some constant variable
Timer();
