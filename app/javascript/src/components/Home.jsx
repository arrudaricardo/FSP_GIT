import React, { useContext } from 'react';
import {StoreContext} from './App'
import UserRepos from './UserRepos'


 const Home = () => {
    const { state } = useContext(StoreContext)
     const user = state.session.currentUser

    return (
    <div className="body"> 
        <div className="home">
            <div className="welcome">Welcome {user && user.username} to Gitmokey
            </div>
            {user && <UserRepos username={user.username} />}

        </div>
        <div className='content'></div>

    </div>
    )
}

export default Home;
