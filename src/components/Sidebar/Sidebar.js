import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoutes,
  SidebarMenu,
  SidebarRoutesLogin
} from "./SidebarElements";
function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">
            Features
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/">
            Pricing
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/">
            Resources
          </SidebarLink>
          <br/>
          <SideBtnWrap>
            <SidebarRoutesLogin onClick={toggle}>Login</SidebarRoutesLogin>
            <SidebarRoutes onClick={toggle}>Sign Up</SidebarRoutes>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
