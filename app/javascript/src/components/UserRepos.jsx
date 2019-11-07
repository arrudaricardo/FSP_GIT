import React, {useContext, useState, useEffect} from 'react'
import {StoreContext} from './App'
import {useParams} from 'react-router-dom'
import { getReposByUsername } from '../state/actions/index'

const UserRepos = ({username}) => {
    const [state, dispatch] = useContext(StoreContext)
    const {user_name, repo_name} = useParams();

    useEffect(()=> {
        let username = state.currentUser.username

        if (typeof username === 'undefined'){
            getReposByUsername()
        }
        // get all repository by username
    
    },[])

    return (
        <div>

        </div>
    )
}


export default UserRepos;
