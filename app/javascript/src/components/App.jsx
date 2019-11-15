import React, {useReducer, createContext, useEffect} from 'react'
import reducer from '../state/reducers/index'
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import IssueForm from './IssueForm'
import Header from './Header'
import LoginForm from './LoginForm'
import CreateForm from './CreateForm'
import Home from './Home'
import CreateRepo from './CreateRepo'
import UserRepos from './UserRepos'
import Repository from './Repository'
import { CSSTransition } from 'react-transition-group'

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

const routes = [
    {path: '/', name: "Home", Component: Home},
    {path: '/signup', name: "Signup", Component: CreateForm},
    {path: '/create', name: "Create Repo", Component: CreateRepo},
    {path: '/login', name: "Login", Component: LoginForm},
]

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
                   {routes.map( ({path, Component},i) => (
                       <Route key={i} strict exact path={path}>
                           {( {match } ) => (
                               <CSSTransition
                               in={match != null}
                               timeout={300}
                               className='AcessForm'
                               unmountOnExit
                           >
                               <div className='page'>
                                   <Component />
                               </div>
                               </CSSTransition>
                           )}
                           </Route>

                   ) )}

               <Switch> 
                <Route  path={`/:username/:repo_name`}
                component={Repository}
                />

                <Route exact strict path={`/:username/`}
                component={UserRepos}
                />
               </Switch>

                </div>
            </StoreContext.Provider>
        </HashRouter> 
    </div>
    )
}


export default App;


                       // <Route exact path="/">
                       //      <Home/> 
                       // </Route>

                      // <Route exaxt path="/signup">
                       //    <CreateForm/>
                       // </Route>

                      // <Route exaxt path="/create">
                       //    <CreateRepo/>
                       // </Route>

                       // <Route exact path="/login" >
                       //     <LoginForm/>
                       // </Route>
                        
