import React, { useContext } from 'react';
import {StoreContext} from './App'


 const Home = () => {
    const { state } = useContext(StoreContext)
     const currentUser = state.session

    return (
    <div className="body"> 
        <div className="home">

            <div className="welcome">Welcome to {Object.keys(currentUser).length == 0 ? "": currentUser.username } Gitmokey
            </div>

        </div>
        <div className='content'></div>

    </div>
    )
}

export default Home;
