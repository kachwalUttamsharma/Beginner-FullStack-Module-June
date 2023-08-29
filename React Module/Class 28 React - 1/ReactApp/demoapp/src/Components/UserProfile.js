import React, { Fragment } from 'react'

const UserProfile = ({name = "", email = " ", age = "", occupation = "SWE"}) => {
    const buttonHandler = () => {
        alert('Submit Button has been Clicked');
    }
    return (
    <Fragment>
        <div>UserProfile</div>
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>age: {age}</div>
            <div>occupation: {occupation}</div>
            <button onClick={buttonHandler}>Submit Button</button>
        </div>
    </Fragment>
    
  )
}

export default UserProfile