import React, {useContext, useState, useEffect} from 'react'
import {StoreContext} from './App'
import {Route, NavLink, Switch} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {getRepoByUsername} from '../state/actions/index'
import {getRepoLs} from '../state/actions/index'
import Code from './Code'
import IssueForm from './IssueForm.jsx'
import Issues from './Issues'

const Respository = () => {
    const { username, repo_name } = useParams();
    const [repo, setRepo] = useState(null)
    const {state, dispatch} = useContext(StoreContext)

    useEffect( ()=> {
    console.log(username, repo_name)
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

    const navStyle = {
        fontWeight: "bold",
        color: "gray"
    }

    return (
    <>
        <div style={{ display: 'inline-flex' }}>
          <div style={{
            paddingTop: '3em',
            // width: '40%',
          }}>
            <ul style={{display: 'inline-flex', listStyleType: 'none', padding: 6 }}>
                <li style={{paddingRight: '0.4em'}}><NavLink activeStyle={navStyle} exact to={`/${username}/${repo_name}/`}>Code</NavLink></li>
                <li ><NavLink activeStyle={navStyle} to={`/${username}/${repo_name}/issues`}>Issues</NavLink></li>
            </ul>

          </div>
        </div>

        <div className='repository'>

            <div className='form-error'>
                {state.errors.slice(0,2).map( (error, i) => (
                    <div key={i} > {error} </div>
                ))}
            </div>


            <div className='Container'>
            <Switch>
                <Route exact path={`/${username}/${repo_name}/`}> 
                <>
                {repo && <Code 
                username={username}
                repo_name={repo_name} 
                repo={repo}
                />
                }
               </>
            </Route>


                <Route path={`/${username}/${repo_name}/issues`}> 
                <>
                {repo && <Issues 
                username={username}
                repo_name={repo_name} 
                repo={repo}
                />
                }
               </>
            </Route>

            <Route path={`/${username}/${repo_name}/createissue`}> 
                <>
                {repo && <IssueForm

                username={username}
                repo_name={repo_name} 
                repo={repo}
                />
                }
               </>
            </Route>
        </Switch>
            </div>

            
        </div>
    </>
    )
}

export default Respository;
