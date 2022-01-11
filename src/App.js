import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import Data from "./Data.js";

function App() {
  const [shoes, shoesChange] = useState([Data]);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='jumbotron'>
        <img />
        <h3>20% Season Off</h3>
        <span>subtitle</span>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='60%' />
            <h5>상품명</h5>
            <p>상품 설명 & 가격</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='60%' />
            <h5>상품명</h5>
            <p>상품 설명 & 가격</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='60%' />
            <h5>상품명</h5>
            <p>상품 설명 & 가격</p>
          </div>
          <Shoes />
        </div>
      </div>
    </div>
  );
}

function Shoes() {
  return (
    <div className='col-md-4'>
      <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='60%' />
      <h5>상품명</h5>
      <p>상품 설명 & 가격</p>
    </div>
  );
}

export default App;
