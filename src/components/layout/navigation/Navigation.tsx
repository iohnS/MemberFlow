import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";

type Props = {};

const Heading = styled.h2.attrs(() => ({
  className: "display-4",
}))`
  font-weight: bold,
  color: #968c8c,
`;

export default function Navigation(props: Props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">MemberFlow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="">Dashboard</Nav.Link>
              <Nav.Link href="">Members</Nav.Link>
              <Nav.Link href="">My Account</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
