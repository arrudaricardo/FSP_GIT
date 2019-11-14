import React from 'react'
import IssueFrom from './IssueForm'
import Issue from './Issue'
import {Link} from 'react-router-dom'

const Issues = ({username, repo_name, repo}) => {

    return (
    <div>

        <div className='create-issue-header'>
            <Link className='create-issue-btn' to={`createissue`}>Create Issue</Link>
        </div>

        <div> 
            <h1>Issues from {repo_name}</h1>
        </div>

        <div create-issue-issues>
        </div>
    </div>

   )
}


export default Issues
