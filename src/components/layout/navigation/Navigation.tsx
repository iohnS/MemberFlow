import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { NavigationStyle } from "./Navigation.style";
import { useEffect } from "react";
import { ThemeMode } from "../../../styles/global.style";

type Props = {};

export default function Navigation(props: Props) {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    console.log(location);
  }, []);

  const handleLogOut = () => {
    return navigate("/");
  };

  const navigateTo = (s: string) => {
    return navigate(s);
  };

  return (
    <NavigationStyle>
      <Navbar
        expand="lg"
        sticky="top"
        bg={ThemeMode}
        variant={ThemeMode}
        className="Navbar"
      >
        <Container fluid>
          <Navbar.Brand href="#">MemberFlow.</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
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
                onClick={() => navigateTo("/my-account")}
                eventKey="/my-account"
              >
                My Account
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavigationStyle>
  );
}
