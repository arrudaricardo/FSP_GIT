import React, {useContext, useState, useEffect} from 'react'
import {StoreContext} from './App'
import {useParams} from 'react-router-dom'
import {getRepoByUsername, deleteRepo } from '../state/actions/index'
import {getRepoLs} from '../state/actions/index'
import { useHistory } from "react-router-dom";

const Respository = () => {
    let history = useHistory();
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
        getRepoLs(username, repo_name)
    }  )

    const handleDelete = () => {
        // get repo id by user/reponame
        //entities.users.ricardo.repositories
        let repo = Object.values(state.entities.users[username].repositories).filter(e => e.name === repo_name)
        deleteRepo(repo.id)(dispatch)
        history.push('/') 
    }

    return (
        <div className='repository'>

            <div className='form-error'>
                {state.errors.slice(0,2).map( (error, i) => (
                    <div key={i} > {error} </div>
                ))}
            </div>
            { repo &&  
                    (<div className='repo-container'> 
                        <div className='repo-info'> 

                            <label className="repo-info-name">
                                <div> {repo.name} </div>
                            </label>

                            <label className='repo-info-description'> 
                                <div> {repo.description} </div>
                            </label>


                        </div> 
                    </div>) 
            } 
                <div className='info-repo'>

                    <div className='info-container'>
                        <div className='info-repo-display'> 
                            <span >git init</span>
                            <span >git add README.md</span>
                            <span >git commit -m "first commit"</span>
                            <span >git remote add origin http://localhost:3000/{username}/{repo_name}</span>
                            <span >git push -u origin master</span>
                        </div>
                    </div>

                    <div className='info-container'>
                    <div className='info-repo-display'> 
                        <span >git init</span>
                        <span >git add README.md</span>
                        <span >git commit -m 'first commit'</span>
                        <span >git remote add origin https://localhost:3000/{username}/{repo_name}.git</span>
                        <span >git push -u origin master</span>
                    </div>
                </div>
                </div>

                {state.entities.users[username] && 
                    <div className='delete-repo'>
                        <button className='deleteRepoBtn' onClick={handleDelete} >Delete Respository</button>
                    </div>
                }
        </div>
    )
}

export default Respository;
