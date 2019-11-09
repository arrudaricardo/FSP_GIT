import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from '../img/logo.png'
import Burger from '../img/menu-button-of-three-horizontal-lines.svg'
import { LOGOUT_CURRENT_USER } from '../state/constants'
import {StoreContext} from './App'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
const history = useHistory();
    const { state, dispatch} = useContext(StoreContext)

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

    const handleLogout = (e) => {
            e.preventDefault()
            console.log('logout')
            dispatch({type: LOGOUT_CURRENT_USER})
        history.push('/')
            
    }

  return (
    <header className="Header">
        <NavLink to='/'>
        <img src={logo} className="Logo" alt="logo" />
        </NavLink>
        <nav className="Nav">
            {state.session.currentUser ? 
            <>
                <NavLink to={`/user/${state.session.currentUser.username}`}>My Repos</NavLink> 
                <NavLink to="/create">Create Repo</NavLink>
                <button onClick={handleLogout}>Logout</button>
            </>
                :
            <> <NavLink to="/signup">Signup</NavLink> <NavLink to="/login">Login</NavLink> 
            </> 
            }

        </nav>
      <img onClick={toggleNav} className="Burger"src={Burger}/>
    </header>
  );
}
