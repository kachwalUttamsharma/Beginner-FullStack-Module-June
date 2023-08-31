import React, { useState } from 'react'

const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const ageHandler = (e) => {
        setAge(e.target.value);
    }

    const occupationHandler = (e) => {
        setOccupation(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({
            name: name,
            email: email,
            age: age,
            occupation: occupation
        })
    }
  return (
    <div>
        <h1>User Profile</h1>
        <form onSubmit={submitHandler} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <label for="name">Name</label>
            <input id="name" type='text' value={name} onChange={nameHandler}/>
            <label for="email">Email</label>
            <input id="email" type='email' value={email} onChange={emailHandler}/>
            <label for="age">Age</label>
            <input id="age" type='number' value={age} onChange={ageHandler}/>
            <label for="occupation">occupation</label>
            <input id="occupation" type='text' value={occupation} onChange={occupationHandler}/>
            <button>Submit Form Button</button>
        </form>
    </div>
  )
}

export default Forms
