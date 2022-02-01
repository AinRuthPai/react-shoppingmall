import React, { useState, useContext } from "react";
import { stockcontext } from "../App";
import { useHistory } from "react-router-dom";

function Card(props) {
  const stock = useContext(stockcontext);
  const history = useHistory();

  return (
    <div className='col-md-4'>
      <img
        className='cardImg'
        src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"}
        width='60%'
        alt='shoesImg'
        onClick={() => {
          history.push("/detail/" + props.shoes.id);
        }}
      />
      <h5
        className='cardTitle'
        onClick={() => {
          history.push("/detail/" + props.shoes.id);
        }}>
        {props.shoes.title}
      </h5>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
      <p>재고 : {stock[props.shoes.id]}</p>
      {/* <Test /> */}
    </div>
  );
}

// function Test() {
//   const stock = useContext(stockcontext);
//   return <p>재고 : {stock[0]}</p>;
// }

export default Card;
