import styled from "styled-components";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ThemeMode,
  NavBarHeight,
  BackgroundColor,
} from "../../../../styles/global.style";

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
  const NavigationStyle = styled.section`
    .bg-light {
      --bs-bg-opacity: 0 !important;
      border-bottom: none;
      background-color: ${BackgroundColor} !important;
    }

    .navbar-brand {
      font-size: 1.25rem !important;
      font-weight: 700 !important;
      background: #3de2e8 !important;
      color: transparent !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;
      padding-left: 1rem;
    }

    .nav-link {
      font-size: 14px;
    }

    .nav-link:hover {
      text-decoration-line: underline;
    }
  `;

  /*   color: white;
  border: 1px solid #fff;
  ::placeholder { 
      color: white;
      opacity: 1;
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
