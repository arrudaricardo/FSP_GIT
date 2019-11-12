import React,{useState, useContext, useEffect} from 'react';
import {StoreContext} from './App'
import { CLEAR_ERRORS } from '../state/constants.js'
import {createIssue } from '../state/actions/index'
import { useHistory } from "react-router-dom";

const IssueForm = ({repoId}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
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
        createIssue({title,body},repoId)
      };

    return (
            <div className="form-body">
            <div className='form-error'>
                {state.errors.length > 0 && state.errors.slice(-1)[0].map( (error, i) => (
                    <div key={i} > {error} </div>
                ))}
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /> 
                    <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} /> 
                </div>
                <div className='form-submit'>
                    <input type="submit" value="Create Issue"/>
                </div>
            </form>
        </div>
    )
}

export default IssueForm ;
