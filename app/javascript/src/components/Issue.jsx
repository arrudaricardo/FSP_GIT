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
             getComments(repo.id,  issue.id)(dispatch)
         }
     }, [issue, state.ui.loading] )




    const handleSubmit = (e) => {
        e.preventDefault();
        createComments({body:commentBody,
                       repoId: issue.repository_id,
                       issueId: issue.id})(dispatch)
        dispatch({type:TOGGLE_LOADING, payload: true })
        setCommentBody('')
    }

    return  (
            <div className='issue-container'>
                <div className='issue-body'> 
                    <div>
                    <h1>{`${title}`} </h1>
                    {issue && <h2> {`${issue.body}`}</h2> }
                    <div className='issue-comments'>
                    </div>
                </div>
                </div>

                <div className='comments-body'>
                    <ul className='chat-box'>
                        { (issue && state.entities.repositories[issue.repository_id].issues[issue.id].comments) &&
                            Object.values(state.entities.repositories[issue.repository_id].issues[issue.id].comments).map( ({id, body, username, created_at}) => (
                        <li className='chat' key={id}>
                            <div className='chat-info'>
                                <div>{username} - </div>
                                <div>{created_at.split('T')[0]}</div>
                            </div>
                            <div className='comment-body'>{body}</div>
                        </li>
                        ) ) }

                    </ul>
                </div>

            <div className='comment-form'>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        className='comment-textarea'
                        value={commentBody}
                        onChange={e => setCommentBody(e.target.value)}
                    />
                    <input value='Post'type="submit"/>
                </form> 
            </div> 

        </div>
    )
}

export default Issue;
//todo: style, display comments, and form to create new comment.
