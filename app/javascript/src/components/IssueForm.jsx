import React,{useState, useContext, useEffect} from 'react';
import {StoreContext} from './App'
import { CLEAR_ERRORS, TOGGLE_LOADING } from '../state/constants.js'
import { createIssue } from '../state/actions/index'

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
         if (typeof repo === undefined){
            getRepoByUsername(username, repo_name)(dispatch)
         }
    }, [] )


    // check if title includes in repo.issues.title
     useEffect( () => {

         let issues = state.entities.repositories[repo.id].issues
         let newTitle = title
         let checkTitle = issues ? Object.values(issues).some( ({title}) => title === newTitle ): false

         console.log(checkTitle)
         if (checkTitle) {
             history.push(`/${username}/${repo_name}/issue/${title}`)
         }
        
    }, [state.entities.repositories[repo.id].issues ] )



    const onSubmit = async e => {
        e.preventDefault();
        dispatch({type: TOGGLE_LOADING, payload: true})   
        createIssue({title,body}, repo.id)(dispatch)
      };

    return (
        <>
        {repo ? 
        <div className="AcessForm">
            <div className="form-body">
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
