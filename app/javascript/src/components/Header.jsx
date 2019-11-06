import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logo.png'
import { CSSTransition } from "react-transition-group";
import Burger from '../img/menu-button-of-three-horizontal-lines.svg'


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
         <button>Logout</button>

        </nav>
      </CSSTransition>
      <img onClick={toggleNav} className="Burger"src={Burger}/>
    </header>
  );
}
