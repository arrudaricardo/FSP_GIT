import React, {useContext} from 'react'
import { deleteRepo } from '../state/actions/index'
import {StoreContext} from './App'
import { useHistory } from "react-router-dom";



const Code = ({username, repo_name, repo}) => {

    let history = useHistory();
    const {state, dispatch} = useContext(StoreContext)

    const handleDelete = () => {
        let repo = Object.values(state.entities.users[username].repositories).filter(e => e.name === repo_name)
        deleteRepo(repo.id)(dispatch)
        history.push('/') 
    }
    return ( 
        <>
            <div className='repo-container'> 
                <div className='repo-info'> 

                    <label className="repo-info-name">
                        <div> {repo.name} </div>
                    </label>

                    <label className='repo-info-description'> 
                        <div> {repo.description} </div>
                    </label>


                </div> 
            </div>
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

    </>
    )
}


export default Code
