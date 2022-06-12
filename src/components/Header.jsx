import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg='light' expand='lg' className='navbar'>
      <Container>
        <Navbar.Brand>ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/cart'>
              Cart
            </Nav.Link>
            <NavDropdown title='Menu' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Info</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>LogIn</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className='d-flex'>
            <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' />
            <Button variant='outline-primary'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
