import React, { useState, useContext } from "react";
import { stockcontext } from "../App";
import { useHistory } from "react-router-dom";

function Card(props) {
  const stock = useContext(stockcontext);
  const history = useHistory();

  return (
    <div
      className='col-md-4'
      onClick={() => {
        history.push("/detail/" + props.shoes.id);
      }}>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width='60%' />
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
      <Test />
    </div>
  );
}

function Test() {
  const stock = useContext(stockcontext);
  return <p>재고 : {stock[0]}</p>;
}

export default Card;
