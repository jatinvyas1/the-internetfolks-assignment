import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  padding: 0.5rem 10rem;
  z-index: 10;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  @media screen and (max-width: 768px) {
    transition: all 0.8s ease;
    padding: 0.5rem 0.5rem;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 0px;
`;

export const NavLink = styled(Link)`
  color: #bfbfbf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &active {
    color: #3b3054;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #3b3054;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #bfbfbf;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;
  margin-right: -24px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 240px/200px;
  background: #2acfcf;
  padding: 10px 22px;
  margin: 10px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
  }
  @media screen and(max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinkLogin = styled(Link)`
  border-radius: 240px/200px;
  background: #fff;
  padding: 10px 22px;
  margin: 10px;
  color: #bfbfbf;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #000;
  }
  @media screen and(max-width: 768px) {
    display: none;
  }
`;
