import React, {useContext, useEffect} from 'react'
import {StoreContext} from './App'
import {useParams, Link} from 'react-router-dom'
import {getReposByUsername} from '../state/actions/index'

const UserRepos = () => {
    const { username } = useParams();
    // const [userRepos, setUserRepos] = useState([])
    const {state, dispatch} = useContext(StoreContext)

    console.log(username)
    useEffect(()=> {
        //TODO: fetch if user not found
        getReposByUsername(username)(dispatch)
    },[])

    return (
        <>
        <div className='repo-list'>
            <h1> {`${username}'s`}<span style={{color: '#1a1a1a'}}> {`Repositories`}</span> </h1>
            <div className='repo-list-item'>
            {state.entities.users[username] && state.entities.users[username].repositories.map( e => (
                <div className="repo-container" key={e.id}> 
                    <Link to={`/${username}/${e.name}`} className="repo-list-item-name"> {e.name} </Link>
                    <div className="repo-list-item-description"> {e.description} </div>
                </div>
            ) )}
            </div>
        </div>
        </>
    )
}

export default UserRepos;


