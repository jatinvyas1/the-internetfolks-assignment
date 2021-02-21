import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: absolute;
  border-radius:12px;
  z-index: 999;
  width: 80%;
  height: 80%;
  margin: 10%;
  background: #3b3054;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "3rem" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding: 0px;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 1.5;
    transition: 0.3s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SidebarRoutesLogin = styled(Link)`
    border-radius: 240/200px;
    white-space: nowrap;
    padding: 16px 30px;
    margin-top:8px;
    color: #fff;
    font-size:16px;
    outline:none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition:all 0.2s ease-in-out;
        opacity:0.5;

    }
`;

export const SidebarRoutes = styled(Link)`
    border-radius: 240px/200px;
    background: #2acfcf;
    white-space: nowrap;
    padding: 16px 30%;
    margin-top:8px;
    color: #fff;
    font-size:16px;
    outline:none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition:all 0.2s ease-in-out;
        opacity:0.5;

    }
`;
