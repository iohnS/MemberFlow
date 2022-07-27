import React from "react";
import { Option, Toggle2Off } from "react-bootstrap-icons";
import SidebarMenu, {
  SidebarMenuBody,
  SidebarMenuBrand,
  SidebarMenuCollapse,
  SidebarMenuFooter,
  SidebarMenuHeader,
  SidebarMenuNav,
  SidebarMenuNavIcon,
  SidebarMenuNavLink,
  SidebarMenuNavTitle,
} from "react-bootstrap-sidebar-menu";
import styled from "styled-components";

type Props = {};

const Sidebar: React.FC = (props: Props) => {
  return (
    <Style>
      <SidebarMenu variant="light" bg="light" expand="lg" expanded>
        <SidebarMenuCollapse>
          <SidebarMenuHeader>
            Settings
            <SidebarMenuBrand>
              <Option />
            </SidebarMenuBrand>
          </SidebarMenuHeader>
          <SidebarMenuBody>
            <SidebarMenuNav>
              <SidebarMenuNavLink active>
                <SidebarMenuNavIcon>1</SidebarMenuNavIcon>
                <SidebarMenuNavTitle>My Account</SidebarMenuNavTitle>
              </SidebarMenuNavLink>
              <SidebarMenuNavLink>
                Password and authentication
              </SidebarMenuNavLink>
              <SidebarMenu.Sub>Hej</SidebarMenu.Sub>
            </SidebarMenuNav>
          </SidebarMenuBody>
          <SidebarMenuFooter>By Patrik</SidebarMenuFooter>
        </SidebarMenuCollapse>
      </SidebarMenu>
    </Style>
  );
};

const Style = styled.div`
  padding-top: 0;
  flex-direction: column;
  grid-area: sidebar;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  .sidebar-menu-collapse.show {
    width: 300px;
  }
`;

export default Sidebar;
