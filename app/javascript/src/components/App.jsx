import React, {useReducer, createContext, useEffect} from 'react'
import reducer from '../state/reducers/index'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header'
import LoginForm from './LoginForm'
import CreateForm from './CreateForm'
import Home from './Home'

const initialState = {
    entities: {
        repositories: {},
        users: {},
        issues: {},
        comments: {},
        ui: {loading: false},
        errors: {},
        session: {}
    }
};

export const StoreContext = createContext(null)

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    //debuging
    useEffect( ()=> {
        console.log(state)
    })
    return (
    <BrowserRouter> 
    <StoreContext.Provider value={{state, dispatch}}> 
        <Header/>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exaxt path="/signup" component={CreateForm} />
          <Route exact path="/login" component={LoginForm} />
        </div>
    </StoreContext.Provider>
    </BrowserRouter> 
    )
}


export default App;

