import React, { useEffect, useRef, useState } from 'react'

const ReferenceEffect = () => {
    const [counter, setCounter] = useState(0);
    const countRendersRef = useRef(0);

    useEffect(() => {
        
        // setCounter(counter+1);
        console.log(countRendersRef.current)
    })

    const increaseCounter = () => {
        countRendersRef.current = countRendersRef.current+1;
        setCounter((prevState) => prevState+1);
    }

  return (
    <>
    <div>{counter}</div>
    <div>This is no of re-renders : {countRendersRef.current}</div>
    <button onClick={increaseCounter}>increaseCounter</button>
    </>
  )
}

export default ReferenceEffect