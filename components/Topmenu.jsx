import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topmenu = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg"  data-bs-theme="dark">
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand as={Link} to="/">OnlineShopping</Navbar.Brand>

          {/* Navbar Toggle button for mobile screens */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Collapsible Navbar Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/product">Product</Nav.Link>
              <Nav.Link  as={Link} to="search">Search</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topmenu;
