import React,{useState, useContext, useEffect} from 'react';
import {CLEAR_ERRORS} from '../state/constants'
import {StoreContext} from './App'
import {login} from '../state/actions/index'
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const {state, dispatch} = useContext(StoreContext)
    
     let history = useHistory();
    // Clear error when unmont
    useEffect(()=>{
      dispatch({type: CLEAR_ERRORS})   
        return () => {
          dispatch({type: CLEAR_ERRORS})   
        }
    },[])

    useEffect(() => {
        if (state.session.currentUser !== null) {
            history.push('/') 
        }

    },[state])

    const onSubmit = async e => {
        e.preventDefault();

        login({user:{credential,password}})(dispatch)
  };

    return (
        <>
                <div style={{paddingBottom: 0}} className='form-error'>
                    {state.errors.slice(0,1).map( (error, i) => (
                        <div key={i} > {error} </div>
                    ))}
                </div>
                <form onSubmit={onSubmit}>
                    <div >
                        <input id='credential' type="text" placeholder="username or e-mail" value={credential} onChange={e => setCredential(e.target.value)} /> 
                        <input id='password' type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> 
                    </div>
                <div className='form-submit'>
                        <input type="submit" value="Sign In"/>
                    </div>
                </form>
            </>
    )
}

export default LoginForm;
