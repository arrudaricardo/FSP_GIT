import React, {useReducer, createContext, useEffect} from 'react'
import reducer from '../state/reducers/index'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header'
import LoginForm from './LoginForm'
import CreateForm from './CreateForm'
import Home from './Home'

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
                  <Route exact path="/" component={Home} />
                  <Route exaxt path="/signup" component={CreateForm} />
                  <Route exact path="/login" component={LoginForm} />
                </div>
            </StoreContext.Provider>
        </BrowserRouter> 
    </div>
    )
}


export default App;

