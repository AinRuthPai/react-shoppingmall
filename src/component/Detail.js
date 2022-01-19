import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../Detail.scss";
import { stockcontext } from "../App";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

function Detail(props) {
  const history = useHistory();
  const { id } = useParams();
  const findItem = props.shoes.find((item) => {
    return item.id == id;
  });
  const [alert, changeAlert] = useState(true);
  const stock = useContext(stockcontext);
  const [tab, tabChange] = useState(0);
  const [active, activeChange] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <>
      <div className='container'>
        {alert === true ? (
          <div className='my-alert'>
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
        ) : null}
        <div className='row'>
          <div className='col-md-6'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%' />
          </div>
          <div className='col-md-6 mt-4'>
            <h4 className='pt-5'>{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}원</p>
            <p>재고 : {stock[0]}</p>
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

      <Nav className='detailNav' activeKey='/home' onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link
            eventKey='link-0'
            onClick={() => {
              activeChange(false);
              tabChange(0);
            }}
          >
            정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-1'
            onClick={() => {
              activeChange(false);
              tabChange(1);
            }}
          >
            후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-2'
            onClick={() => {
              activeChange(false);
              tabChange(2);
            }}
          >
            문의
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={active} classNames='wow' timeout={500}>
        <TabContent tab={tab} activeChange={activeChange} />
      </CSSTransition>
    </>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.activeChange(true);
  });

  if (props.tab === 0) {
    return <div>정보</div>;
  } else if (props.tab === 1) {
    return <div>후기</div>;
  } else if (props.tab === 2) {
    return <div>문의</div>;
  }
}
export default Detail;
