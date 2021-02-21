import React from "react";
import Logo from "./../Navbar/logo.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Bars,
  NavMenu,
  NavLink,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavBtnLinkLogin,
} from "./NavbarElements";
function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Logo} />
          </NavLogo>
          <Bars onClick={toggle} />
          <NavMenu>
            <NavItem>
              <NavLink to="/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Resources</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLinkLogin to="/">Login</NavBtnLinkLogin>
            <NavBtnLink to="/">Sign Up</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
