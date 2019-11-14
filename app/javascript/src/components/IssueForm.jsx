import React,{useState, useContext, useEffect} from 'react';
import {StoreContext} from './App'
import { CLEAR_ERRORS } from '../state/constants.js'
import {createIssue } from '../state/actions/index'
import { useHistory, useParams } from "react-router-dom";
import {getRepoByUsername} from '../state/actions/index'

const IssueForm = ({username, repo_name, repo}) => {
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

     useEffect( () => {
        getRepoByUsername(username, repo_name)(dispatch)
    },[])


    // const getRepoId = () => {
    // let repos = Object.values(state.entities.repositories)
    //     repos.forEach( el => {
    //         if (el.owner === username) {
    //             setRepo(el)
    //         }
    //     } )
    // }
    //
     // useEffect( () => {
     //     if (!repo) {
     //        getRepoId();
     //     }
    // })


    const onSubmit = async e => {
        e.preventDefault();
        createIssue({title,body},repo.id)
      };

    return (
        <>
        {repo ? 
        <div className="AcessForm">
            <div className="form-body">
                <div className='form-error'>
                    {state.errors.length > 0 && state.errors.slice(-1)[0].map( (error, i) => (
                        <div key={i} > {error} </div>
                    ))}
                </div>
            <form onSubmit={onSubmit}>
                <div className='inputs'>
                    <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /> 
                    <div className='textarea'>
                        <textarea placeholder="Descripton" value={body} onChange={e => setBody(e.target.value)} /> 
                     </div>
                </div>
                <div className='form-submit'>
                    <input type="submit" value="Create Issue"/>
                </div>
            </form>
        </div> </div>
        : 
        <div className='Loading'>Loading</div> }
        </>

    )
}

export default IssueForm ;
