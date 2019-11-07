import React, {useReducer, createContext, useEffect} from 'react'
import reducer from '../state/reducers/index'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header'
import LoginForm from './LoginForm'
import CreateForm from './CreateForm'
import Home from './Home'
import CreateRepo from './CreateRepo'
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
        <BrowserRouter> 
            <StoreContext.Provider value={{state, dispatch}}> 
                <div className="container">

                   <Header/>
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

                   <Route path="/:user_name/:repo_name" >
                       <Repository/>
                   </Route>
                </div>
            </StoreContext.Provider>
        </BrowserRouter> 
    </div>
    )
}


export default App;

