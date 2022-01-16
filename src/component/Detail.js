import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "../Detail.scss";

function Detail(props) {
  const history = useHistory();
  const { id } = useParams();
  const findItem = props.shoes.find(function (item) {
    return item.id == id;
  });

  const [alert, changeAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%' />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}원</p>
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
      {alert === true ? (
        <div className='my-alert'>
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}
    </div>
  );
}
export default Detail;
