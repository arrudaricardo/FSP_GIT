import React, {useContext, useState, useEffect} from 'react'
import {StoreContext} from './App'
import {useParams} from 'react-router-dom'
import {getRepoByUsername} from '../state/actions/index'

const Respository = () => {
    const { username, repo_name } = useParams();
    const [repo, setRepo] = useState(null)
    const {state, dispatch} = useContext(StoreContext)

    useEffect( ()=> {
        getRepoByUsername(username, repo_name)(dispatch)

    
    },[])

    useEffect( () => {
    let a = Object.values(state.entities.repositories)
        a.forEach( el => {
            if (el.owner === username) {
                setRepo(el)
            }
        } )
        console.log(repo)
    } )

    return (
        <div className='repository'>
            { repo &&  
                    (<div className='repo-container'> 
                        <div className='repo-info'> 
                            <div className="repo-info-name">Name:
                                <div> {repo.name} </div>
                            </div>

                            <div className='repo-info-description'>Description:
                                <div> {repo.description} </div>
                            </div>

                            <div className='repo-body'> </div>

                        </div> </div>) 
            } 

            <button> DELETE REPO </button>
        </div>
    )
}

export default Respository;
//TODO: delete button
