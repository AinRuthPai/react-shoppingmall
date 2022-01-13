import { useState } from "react";
import { useHistory } from "react-router-dom";

function Detail() {
  const history = useHistory();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%' />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>상품명</h4>
          <p>상품 설명</p>
          <p>1200000원</p>
          <button className='btn btn-danger'>주문하기</button>
          <button
            className='btn btn-danger'
            onClick={() => {
              // history.push('/') -> / 경로로 이동
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
