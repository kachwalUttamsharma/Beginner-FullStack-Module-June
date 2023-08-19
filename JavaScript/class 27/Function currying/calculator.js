// Question

/**
 * calculate('sum')(1)(2)(3)
 * calculate('mul')(5)(8)(9)
 * calculate('div')(5)(8)(10) -> 5/8 -> res/10
 * calculate('sub')(2)(4)(6)
 */

function calculate(operation, a, b, c) {
    if(operation == 'sum') return a+b+c;
    else if(operation == 'sub') return a-b-c;
    else if(operation == 'div') return (a/b)/c;
    else if(operation == 'mul') return a*b*c;
    else return "Invalid Operation"
}

function calculateCurry(operation) {
    return function (a) {
        return function (b) {
            return function (c) {
                if(operation === 'sum') return a+b+c;
                else if(operation === 'sub') return a-b-c;
                else if(operation === 'div') return (a/b)/c;
                else if(operation === 'mul') return a*b*c;
                else return "Invalid Operation"
            }
        }
    }
}

console.log(calculateCurry("div")(1)(2)(3));