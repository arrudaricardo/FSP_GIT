import React, { useContext } from 'react';
import {StoreContext} from './App'


 const Home = () => {
    const { state } = useContext(StoreContext)
     const user = state.session.currentUser

    return (
    <div className="body"> 
        <div className="home">
            <div className="welcome">Welcome {user && user.username} to Gitmokey
            </div>
        </div>

    </div>
    )
}

export default Home;
