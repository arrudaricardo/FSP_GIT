import React,{useContext, useEffect, useState} from 'react'
import {StoreContext} from './App'
import {useParams} from 'react-router-dom'

const Issue = ({repo_name, username, repo}) => {
    const { title } = useParams();
    const {state, dispatch} = useContext(StoreContext)
    const [issue, setIssue] = useState(null)

    // get descrition and comments
    useEffect( () => {
        let checkTitle = title
        let issueObj = Object.values(state.entities.repositories[repo.id].issues).filter( ({title}) => title === checkTitle )
        if (issueObj.length > 0 ) {
            setIssue(issueObj[0])
        }

    },[] )

    return  (
        
            <div className='issue-body'> 
                <h1>{`${title}`} </h1>
                {issue && <h2> {`${issue.body}`}</h2> }
                <div className='issue-comments'>
                </div>
            </div>
    )
}

export default Issue;
//todo: style, display comments, and form to create new comment.
