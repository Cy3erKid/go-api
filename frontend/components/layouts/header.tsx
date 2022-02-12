import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

const HeaderResponsive = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"><Image src="logo.svg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="nav nav-pills nav-menu">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Launch">Launch</Nav.Link>
            <Nav.Link href="#SignUp" className="text-pink">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderResponsive;
