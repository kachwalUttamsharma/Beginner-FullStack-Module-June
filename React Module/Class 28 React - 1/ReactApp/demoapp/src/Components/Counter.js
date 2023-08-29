import React, { Fragment } from 'react'

const Counter = () => {
    let count  = 0;
    const incrementHandler = () => {
        count++;
        console.log(count);
    }
    const decrementHandler = () => {
        count--;
        console.log(count);
    }
  return (
    <Fragment>
    <div>Counter</div>
    <div>The count value is {count}</div>
    <button onClick={incrementHandler}>increment_value</button>
    <button onClick={decrementHandler}>decrement_value</button>
    </Fragment>
  )
}

export default Counter