import "./App.css";
import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Data from "./Data.js";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
// const Detail = lazy(() => {
//   return import("./component/Detail");
// });

export const stockcontext = React.createContext();

function App() {
  const [shoes, setShoes] = useState(Data);
  const [stock, setStock] = useState([5, 6, 7, 8, 9, 10]);
  const [more, setMore] = useState(true);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg' className='navbar'>
        <Container>
          <Navbar.Brand href='/'>ShoeShop</Navbar.Brand>
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
                <NavDropdown.Item href='#action/3.2'>X</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>X</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>LogIn</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Switch 안에 담으면 각각의 Route가 맨 처음 하나만 보여줌 */}
      <Switch>
        {/* exact -> 경로가 정확히 일치할 때만 보여짐 */}
        <Route exact path='/'>
          <div className='jumbotron'>
            <h3>20% Season Off</h3>
            <span>Welcome to ShoeShop</span>
          </div>

          <div className='container'>
            <stockcontext.Provider value={stock}>
              <div className='row'>
                {shoes.map((array, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />;
                })}
              </div>
            </stockcontext.Provider>
          </div>
          {more === true ? (
            <button
              className='btn btn-primary mainMoreBtn'
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    setShoes([...shoes, ...result.data]);
                    setMore(false);
                  })
                  .catch(() => {
                    console.log("failed");
                  });
              }}>
              더보기
            </button>
          ) : null}
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        {/* render(
        <Suspense fallback={<div>Loading.......!!!!!!!!</div>}> */}
        <Route path='/detail/:id'>
          <stockcontext.Provider value={stock}>
            <Detail shoes={shoes} stock={stock} setStock={setStock} />
          </stockcontext.Provider>
        </Route>
        {/* </Suspense>
        ) */}

        {/* /:id -> /모든 문자 라는 경로를 의미 */}
        {/* <Route path='/:id'>
          <div>nothing</div>
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
