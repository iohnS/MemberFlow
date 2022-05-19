import styled from "styled-components";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeMode, NavBarHeight } from "../../../styles/global.style";

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

  /* .navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.9);
}
 */
  const NavigationStyle = styled.section`
    .bg-light {
      background-color: #fafafa !important;
      --bs-bg-opacity: 0 !important;
      border-bottom: none;
    }

    .navbar-brand {
      font-size: 1.5em !important;
      font-weight: 700 !important;
      background: linear-gradient(to right, #27b9bd, #3de2e8) !important;
      color: transparent !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;

      padding-left: 1rem;
    }

    .nav-link:hover {
      text-decoration-line: underline;
    }
  `;

  const SearchField = styled.div`
    .me-2 {
      width 250px;
      margin-right: 2rem !important;
    }

    
    .form-control{
      background-color: transparent;
      color: white;
      border: 1px solid #fff;
      ::placeholder { 
          color: white;
          opacity: 1; /* Firefox */
        }
    }
  `;

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
                onClick={() => navigateTo("/my-account")}
                eventKey="/my-account"
              >
                My Account
              </Nav.Link>
            </Nav>
            <SearchField>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search for a member..."
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </SearchField>
            <Nav>
              <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavigationStyle>
  );
}

/* .navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.9);
}
 */
const NavigationStyle = styled.div`
  .bg-light {
    background-color: #fafafa !important;
    --bs-bg-opacity: 0 !important;
    border-bottom: none;
  }

  .navbar-brand {
    font-size: 1.5em !important;
    font-weight: 700 !important;
    background: linear-gradient(to right, #27b9bd, #3de2e8) !important;
    color: transparent !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    padding-left: 2rem;
  }

  .nav-link:hover {
    text-decoration-line: underline;
  }
`;
