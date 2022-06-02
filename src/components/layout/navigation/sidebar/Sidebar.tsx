import React from "react";
import SidebarMenu, {
  SidebarMenuBody,
  SidebarMenuCollapse,
  SidebarMenuFooter,
  SidebarMenuHeader,
  SidebarMenuNavItem,
  SidebarMenuNavLink,
  SidebarMenuNavTitle,
  SidebarMenuSub,
} from "react-bootstrap-sidebar-menu";
import SidebarMenuToggle from "react-bootstrap-sidebar-menu/types/sidebar-menu-toggle";

type Props = {};

const Sidebar: React.FC = (props: Props) => {
  return (
    <SidebarMenu bg="dark" variant="dark">
      <SidebarMenuCollapse>
        <SidebarMenuHeader>

        </SidebarMenuHeader>
        <SidebarMenuBody>
            <SidebarMenuNavItem>
                Hej
            </SidebarMenuNavItem>
        </SidebarMenuBody>
        <SidebarMenuFooter></SidebarMenuFooter>
      </SidebarMenuCollapse>
    </SidebarMenu>
  );
};

export default Sidebar;
