import React, { Fragment, useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    // setCount -> new value of count state and update the component and re-render
    // the component
    const incrementHandler = () => {
        count = count+1;
        setCount(count);
        console.log(count);
    }
    const decrementHandler = () => {
        count = count-1;
        setCount(count);
        console.log(count);
    }
  return (
    <Fragment>
    <div>Counter</div>
    <h3>The count value is {count}</h3>
    <button onClick={incrementHandler}>increment_value</button>
    <button onClick={decrementHandler}>decrement_value</button>
    </Fragment>
  )
}

export default Counter
