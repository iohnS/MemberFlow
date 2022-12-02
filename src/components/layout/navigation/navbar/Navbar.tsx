import styled from "styled-components";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeMode, NavBarHeight } from "../../../../styles/global.style";
import { NavigationStyle } from "./Navbar.style";

type Props = {};

const Navbar: React.FC = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const handleLogOut = () => {
    return navigate("/");
  };

  const navigateTo = (s: string) => {
    return navigate(s);
  };

  /* .navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.9);
}
 */

  return (
    <NavigationStyle>
      <BootstrapNavbar
        expand="lg"
        sticky="top"
        bg={ThemeMode}
        variant={ThemeMode}
        className="Navbar"
      >
        <Container fluid>
          <BootstrapNavbar.Brand href="/dashboard">
            Memberflow.
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
          <BootstrapNavbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: NavBarHeight }}
              navbarScroll
              activeKey={location}
            >
              <Nav.Link
                onClick={() => navigateTo("/dashboard")}
                eventKey="/dashboard"
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                onClick={() => navigateTo("/members")}
                eventKey="/members"
              >
                Members
              </Nav.Link>
              <Nav.Link
                onClick={() => navigateTo("/register")}
                eventKey="/register"
              >
                Register
              </Nav.Link>
              <Nav.Link
                onClick={() => navigateTo("/settings")}
                eventKey="/settings"
              >
                Settings
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </NavigationStyle>
  );
};

export default Navbar;
