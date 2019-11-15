import React,{useState, useContext, useEffect} from 'react';
import {StoreContext} from './App'
import { CLEAR_ERRORS } from '../state/constants.js'
import {signup} from '../state/actions/index'
import { useHistory } from "react-router-dom";

const CreateForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { state, dispatch} = useContext(StoreContext)

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
        signup({user:{username, email, password}})(dispatch)
      };

    return (
            <div className="form-body">
            <div style={{paddingBottom: 0, height: '42px'}} className='form-error'>
                {state.errors.length > 0 && state.errors.slice(-1)[0].map( (error, i) => (
                    <div key={i} > {error} </div>
                ))}
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} /> 
                    <input type="text" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} /> 
                    <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> 
                </div>
                <div className='form-submit'>
                    <input type="submit" value="Sign Up"/>
                </div>
            </form>
        </div>
    )
}

export default CreateForm;
