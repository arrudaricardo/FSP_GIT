import React,{useState, useContext} from 'react';
import {StoreContext} from './App'
import {signup} from '../state/actions/index'

const CreateForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { dispatch} = useContext(StoreContext)

    const onSubmit = async e => {
        e.preventDefault();
        signup({user:{username, email, password}})(dispatch)
  };

    return (
        <>
            <h2>Sign-up</h2>
            <form onSubmit={onSubmit}>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} /> 
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} /> 
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> 
            <input type="submit" value="Login"/>
            </form>
        </>
    )
}

export default CreateForm;
