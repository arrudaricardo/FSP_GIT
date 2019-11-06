import React, { useContext } from 'react';
import {StoreContext} from './App'


 const Home = () => {
    const { state } = useContext(StoreContext)
     const user = state.session.currentUser

    return (
    <div className="body"> 
        <div className="home">

            <div className="welcome">Welcome {user && user.username.toUpperCase()} to Gitmokey
            </div>

        </div>
        <div className='content'></div>

    </div>
    )
}

export default Home;
