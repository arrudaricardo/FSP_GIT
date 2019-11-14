import React,{useContext, useEffect, useState} from 'react'
import {StoreContext} from './App'
import {useParams} from 'react-router-dom'
import {createComments, getComments} from '../state/actions/index'
import {TOGGLE_LOADING} from '../state/constants.js'

const Issue = ({repo_name, username, repo}) => {
    const { title } = useParams();
    const {state, dispatch} = useContext(StoreContext)
    const [issue, setIssue] = useState(null)
    const [commentBody, setCommentBody] = useState('')

    // get issue
    useEffect( () => {
        let checkTitle = title
        let issueObj = Object.values(state.entities.repositories[repo.id].issues).filter( ({title}) => title === checkTitle )
        if (issueObj.length > 0 ) {
            setIssue(issueObj[0])
        }

    },[] )

    // get comment
     useEffect ( () => {
         if (issue) {
             console.log(repo.id, issue.id)
             getComments(repo.id,  issue.id)(dispatch)
         }
     }, [issue, state.ui.loading] )




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(commentBody, issue.repository_id, issue.id)
        createComments({body:commentBody,
                       repoId: issue.repository_id,
                       issueId: issue.id})(dispatch)
        dispatch({type:TOGGLE_LOADING, payload: true })
        setCommentBody('')
    }

    return  (
        <>
            <div className='issue-body'> 
                <h1>{`${title}`} </h1>
                {issue && <h2> {`${issue.body}`}</h2> }
                <div className='issue-comments'>
                </div>
            </div>

            <div className='comments-body'>
                <ul>
                    { (issue && state.entities.repositories[issue.repository_id].issues[issue.id].comments) &&
                        Object.values(state.entities.repositories[issue.repository_id].issues[issue.id].comments).map( ({id, body, username}) => (
                    <li key={id}>
                        <p>{body}</p>
                        <div> by {username} </div>
                    </li>
                    ) ) }

                </ul>
            </div>


            <div className='comment-form'>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        value={commentBody}
                        onChange={e => setCommentBody(e.target.value)}
                    />
                    <input value='Post'type="submit"/>
                </form> 

            </div>
        </>
    )
}

export default Issue;
//todo: style, display comments, and form to create new comment.
