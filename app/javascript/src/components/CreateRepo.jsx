import React,{useState, useEffect, useContext} from 'react';
import { StoreContext } from '../../src/components/App'
import { CLEAR_ERRORS } from '../state/constants'
import { createRepo } from '../state/actions/index'
import {useHistory} from 'react-router-dom'

const CreateForm = () =>{
    let history = useHistory();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { state, dispatch} = useContext(StoreContext)

    // Clear error when unmont
    useEffect(()=>{
      dispatch({type: CLEAR_ERRORS})   
        return () => {
          dispatch({type: CLEAR_ERRORS})   
        }
    },[])

    const handleSubmit = async e => {
        e.preventDefault();
        createRepo({repository:{name, description }})(dispatch);
        history.push(`/user/${state.currentUser.username}/${name}`)

    }
    
    

    return (
        <div className='AcessForm'> 
            <div className="form-body">
            <div className='form-error'>
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
                </div>
                <div className='form-submit'>
                    <input type="submit" value="Create repository"/>
                </div>
            </form>
        </div>
        </div>
    )

}



export default CreateForm;
