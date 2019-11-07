import React, {useReducer, createContext, useEffect} from 'react'
import reducer from '../state/reducers/index'
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from './Header'
import LoginForm from './LoginForm'
import CreateForm from './CreateForm'
import Home from './Home'
import CreateRepo from './CreateRepo'
import UserRepos from './UserRepos'
import Repository from './Repository'

export const initialState = {
    entities: {
        repositories: {},
        users: {},
        issues: {},
        comments: {}
    },

    ui: {loading: false},
    errors: [],
    session: {currentUser: null}
    
};

export const StoreContext = createContext(null)

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //debuging
    useEffect( ()=> {
        console.log(state)
    }, [state])

    return (
    <div className='App'>
        <HashRouter> 
            <StoreContext.Provider value={{state, dispatch}}> 
                <div className="container">

                   <Header/>
                   <Switch> 
                       <Route exact path="/">
                            <Home/> 
                       </Route>

                      <Route exaxt path="/signup">
                          <CreateForm/>
                       </Route>

                      <Route exaxt path="/create">
                          <CreateRepo/>
                       </Route>

                       <Route exact path="/login" >
                           <LoginForm/>
                       </Route>
                        
                       <Route exact path="/user/:username" >
                           <UserRepos/>
                       </Route>

                       <Route exact path="/user/:username/:repo_name" >
                           <Repository/>
                       </Route>

                    </Switch>
                </div>
            </StoreContext.Provider>
        </HashRouter> 
    </div>
    )
}


export default App;

