import React, { useContext } from 'react';
import {StoreContext} from './App'

const welcomeText = 'GitMonkey is a GitHub clone, web application version control using Git.'

 const Home = () => {
    const { state } = useContext(StoreContext)
     const user = state.session.currentUser

    return (
    <div className="body"> 
        <div className="home">
            <div className="welcome">Welcome {user && user.username} to Gitmokey
            </div>
        </div>

        <div style={{paddingTop: '0.1em'}}>
            <p style={{textAlign: 'center'}}> {welcomeText} </p>
        </div>
    </div>
    )
}

export default Home;
