import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logo.png'
import { CSSTransition } from "react-transition-group";
import Burger from '../img/menu-button-of-three-horizontal-lines.svg'
import { LOGOUT_CURRENT_USER } from '../state/constants'
import {StoreContext} from './App'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

    const { state, dispatch} = useContext(StoreContext)
     
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

    const handleLogout = (e) => {
            e.preventDefault()
            console.log('logout')
            dispatch({type: LOGOUT_CURRENT_USER})
    }

  return (
    <header className="Header">
        <NavLink to='/'>
        <img src={logo} className="Logo" alt="logo" />
        </NavLink>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
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
      </CSSTransition>
      <img onClick={toggleNav} className="Burger"src={Burger}/>
    </header>
  );
}
