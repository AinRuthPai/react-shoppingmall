import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Data from "./Data.js";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [shoes, setShoes] = useState(Data);
  const [more, setMore] = useState(true);

  return (
    <div className='App'>
      <Header />

      <Switch>
        <Route exact path='/'>
          <div className='jumbotron'>
            <h3>20% Season Off</h3>
            <span>Welcome to ShoeShop</span>
          </div>

          <div className='container'>
            <div className='row'>
              {shoes.map((shoes) => {
                return <Card shoes={shoes} key={shoes.id} />;
              })}
            </div>
          </div>
          {more === true ? (
            <button
              className='btn btn-primary mainMoreBtn'
              onClick={() => {
                axios
                  .get("https://ainruthpai.github.io/imgSrc/shoeshop/Data2.json")
                  .then((result) => {
                    console.log(result);
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

        <Route path='/detail/:id'>
          <Detail shoes={shoes} />
        </Route>

        <Route path='/:id'>
          <div>NOT FOUND</div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
