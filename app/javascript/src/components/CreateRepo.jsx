import React,{useState, useEffect, useContext} from 'react';
import { StoreContext } from '../../src/components/App'
import { CLEAR_ERRORS } from '../state/constants'
import { createRepo } from '../state/actions/index'
import {useHistory} from 'react-router-dom'

const CreateForm = () =>{
    let history = useHistory();

    const [name, setName] = useState('')
    const [readme, setReadme] = useState(true)
    const [description, setDescription] = useState('')
    const { state, dispatch} = useContext(StoreContext)
    const [repoSize, setRepoSize] = useState(Object.keys(state.entities.repositories).length)

    // Clear error when unmont
    useEffect(()=>{
      dispatch({type: CLEAR_ERRORS})   
        return () => {
          dispatch({type: CLEAR_ERRORS})   
        }
    },[])

    const handleSubmit = async e => {
        e.preventDefault();
        createRepo({repository:{name, description, readme }})(dispatch);
    }

    useEffect( () => {

        if (repoSize  + 1 === Object.keys(state.entities.repositories).length ){
            history.push(`/user/${state.session.currentUser.username}/${name}`)
        }
    },[Object.keys(state.entities.repositories)])
    
    return (
        <div className='AcessForm'> 
            <div className="form-body">
            <div className='form-error'>
                {state.errors.slice(0,2).map( (error, i) => (
                    <div key={i} > {error} </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    /> 
                    <input 
                        type="text" 
                        placeholder="description" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    /> 
                    <div>
                        <input type="checkbox" onChange={() => setReadme(prev => !prev)} defaultChecked={readme}/>
                    <p>Initialize README</p>
                  </div>
                </div>
                <div className='form-submit create-repo'>
                    <input type="submit" value="Create repository"/>
                </div>
            </form>
        </div>
        </div>
    )

}



export default CreateForm;
