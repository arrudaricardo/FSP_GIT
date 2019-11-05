import React, {useReducer, createContext, useEffect} from 'react'
import reducer from '../state/reducers/index'
import LoginForm from './LoginForm'

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
    <StoreContext.Provider value={{state, dispatch}}> 
        <LoginForm/>
    </StoreContext.Provider>
    )
}


export default App;

