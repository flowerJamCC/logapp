import React from 'react'
import { useState } from 'react';
import '../CSS/form.css';
import Button from './Button'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        setName('');
        setEmail('');
        setPassword('');
    };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
        <label  className='label-class' htmlFor='name'>Full Name</label>
        <input className='input-class' id='name' name='name' type='text'
         value={name} onChange={(e)=>setName(e.target.value)}
         required autoFocus
        />
        <label className='label-class' htmlFor='email'>Email</label>
        <input className='input-class' id='email' name='email' type='text'
         value={email} onChange={(e)=>setEmail(e.target.value)}
         required
        />
        <label className='label-class' htmlFor='password'>Password</label>
        <input className='input-class' id='password' name='password' type='password'
         value={password} onChange={(e)=>setPassword(e.target.value)}
         required
        />
        <Button type='submit' buttonText='Sign Up'/>
    </form>
  )
}

export default Form;