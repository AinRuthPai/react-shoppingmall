import { useState } from "react";

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width='60%' />
      <h5>{props.shoes.title}</h5>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default Card;
