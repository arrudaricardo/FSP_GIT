import React,{useState, useContext} from 'react';
import {StoreContext} from './App'
import {login} from '../state/actions/index'

const LoginForm = () => {
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch} = useContext(StoreContext)

    const onSubmit = async e => {
        e.preventDefault();

        login({user:{credential,password}})(dispatch)
  };

    return (
        <>
            <h2>Login</h2>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="username or email" value={credential} onChange={e => setCredential(e.target.value)} /> 
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> 
            <input type="submit" value="Login"/>
        </form>
    </>
    )
}

export default LoginForm;
