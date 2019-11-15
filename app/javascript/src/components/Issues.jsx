import React,{useContext, useEffect} from 'react'
import IssueFrom from './IssueForm'
import Issue from './Issue'
import {Link} from 'react-router-dom'
import {StoreContext} from './App'

const Issues = ({repo}) => {

    const {state, dispatch} = useContext(StoreContext)


    return (
        <>
            <h1> Open Issues for <b style={{textDecoration: 'underline'}}>{repo.name}</b></h1>
        <div className='issues-list'>
        { (repo && state.entities.repositories[repo.id].issues) && 
            <ul className='issue-ul'>
                {Object.values(state.entities.repositories[repo.id].issues).map( ({title}) => (
                    <li key={title}>
                        <Link to={`issue/${title}`}>{title}</Link>
                    </li>
                )) 
                }
            </ul>
            }
        </div>
    </>
   )
}


export default Issues
