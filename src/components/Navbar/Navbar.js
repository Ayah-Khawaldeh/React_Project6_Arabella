import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements_style';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
          {/* <img  style={{width:'4em' }} src={require('../../images/Arabella.png')} alt='logo' /> */}
          <img style={{width:'4em' }} src={require('../../images/Arabella.png')} alt='logo' />
          {/* <img  style={{width:'4em' }} src={require('../../images/Arabella (2).png')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/services' activeStyle>
            services
          </NavLink>
          <NavLink to='/profile' activeStyle>
            profile
          </NavLink>
          <NavLink to='/sign-up/signin' activeStyle>
            Sign Up / Sign In
          </NavLink>
          {/*<NavLink to='/signin' activeStyle>*/}
          {/*  Contact Us*/}
          {/*</NavLink>*/}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/*<NavBtn>*/}
        {/*  <NavBtnLink to='/signin'>Sign In</NavBtnLink>*/}
        {/*</NavBtn>*/}
      </Nav>
    </>
  );
};

export default Navbar;
