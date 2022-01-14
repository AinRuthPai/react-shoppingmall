import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import Data from "./Data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./component/Detail";
import Card from "./component/Card";

function App() {
  const [shoes, shoesChange] = useState(Data);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/detail/1'>Detail</Link>
              </Nav.Link>
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

      {/* Switch 안에 담으면 각각의 Route가 맨 처음 하나만 보여줌 */}
      <Switch>
        {/* exact -> 경로가 정확히 일치할 때만 보여짐 */}
        <Route exact path='/'>
          <div className='jumbotron'>
            <img />
            <h3>20% Season Off</h3>
            <span>subtitle</span>
          </div>

          <div className='container'>
            <div className='row'>
              {shoes.map((array, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>

        <Route path='/detail/:id'>
          <Detail shoes={shoes} />
        </Route>

        {/* /:id -> /모든 문자 라는 경로를 의미 */}
        <Route path='/:id'>
          <div>nothing</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
