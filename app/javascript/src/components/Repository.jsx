import React,{ useContext, useEffect, useState} from 'react'
import {StoreContext} from './App'
import {useParams} from 'react-router-dom'
import { getRepoByUsername } from '../state/actions/index'

const Repository = () => {
    let { user_name, repo_name } = useParams();
    const { state, dispatch} = useContext(StoreContext)
    const [repository, setRepository] = useState(null)

    useEffect( () => {
        console.log(user_name, repo_name)
    for (let repo of state.entities.repositories) {
        if (repo.username === user_name && repo.name === repo_name){
            setRepository(repo)
        }}
        if (repository === null) {
            // get repo by name          
            getRepoByUsername({username: user_name, repo_name: repo_name})(dispatch)
        }
    }
    ,[state.entities.repositories])
    return (
        <>
            <h1>{ repository.name }</h1>
            <div>
            <h3>repository.description</h3>
            </div>
        </>
    )
}

export default Repository;
