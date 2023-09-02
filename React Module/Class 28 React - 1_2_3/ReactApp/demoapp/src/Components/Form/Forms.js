import React, { useState } from 'react'
import './Forms.css'
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
    <div className='wrapper'>
        <h1>User Profile</h1>
        <form onSubmit={submitHandler} className='form'>
            <div className='item'>
            <label for="name">Name : </label>
            <input id="name" type='text' value={name} onChange={nameHandler}/>
            </div>
            <div className='item'>
            <label for="email">Email : </label>
            <input id="email" type='email' value={email} onChange={emailHandler}/>
            </div>
            <div className='item'>
            <label for="age">Age :</label>
            <input id="age" type='number' value={age} onChange={ageHandler}/>
            </div>
            <div className='item'>
            <label for="occupation">occupation : </label>
            <input id="occupation" type='text' value={occupation} onChange={occupationHandler}/>
            </div>
            <button>Submit Form Button</button>
        </form>
    </div>
  )
}

export default Forms
