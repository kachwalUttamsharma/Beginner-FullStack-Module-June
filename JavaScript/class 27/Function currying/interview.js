// function(a,b,c) -> function(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        console.log(args.length + "  "+ func.length);
      if(args.length >= func.length) {
        return func(...args)
      } else {
        return function(...next) { // currying function
            console.log([...args, ...next]);
          return curriedFunc(...args,...next); // recursive call with current input
          // and new input
        }
      }
    }
}
  
  const join = (a, b, c) => {
     return `${a}_${b}_${c}`
  }
  const curriedJoin = curry(join) // function join(a,b,c) -> curriedJoin(1)(2)(3)
  console.log(curriedJoin(1)(2)(3))
  console.log(join(1,2,3));
  

  // inbuilt library function sum(a,b,c) -> curry(sum(a,b,c)) -> curry(a)(b)(c)