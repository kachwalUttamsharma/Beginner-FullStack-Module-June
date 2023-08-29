// rfce -> it generates react template for functinal component
// rafce -> it will generate arrow based react template for function component
import React from 'react'
import MyComponent2 from './MyComponent2';

const MyComponent = () => {

    const name = "steve";

    const showMessage = () => {
        return 'This from show Message';
    }
  return (
    <React.Fragment>
        <div>My name is {name} {10+20} {showMessage()}</div>
        <MyComponent2 />
    </React.Fragment>
  )
}

export default MyComponent