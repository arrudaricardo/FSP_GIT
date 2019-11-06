import React,{useState, useContext, useEffect} from 'react';
import {CLEAR_ERRORS} from '../state/constants'
import {StoreContext} from './App'
import {login} from '../state/actions/index'

const LoginForm = () => {
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const {state, dispatch} = useContext(StoreContext)
    
    // Clear error when unmont
    useEffect(()=>{
      dispatch({type: CLEAR_ERRORS})   
    },[])

    const onSubmit = async e => {
        e.preventDefault();

        login({user:{credential,password}})(dispatch)
  };

    return (
        <div className='AcessForm'>
            <div className="form-body">
                <div className='form-error'>
                    {state.errors.slice(0,2).map( (error, i) => (
                        <div key={i} > {error} </div>
                    ))}
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <input id='credential' type="text" placeholder="username or email" value={credential} onChange={e => setCredential(e.target.value)} /> 
                        <input id='password' type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> 
                    </div>
                <div className='form-submit'>
                        <input type="submit" value="Sign In"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
