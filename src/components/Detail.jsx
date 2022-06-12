import "./Detail.css";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

function Detail({ shoes }) {
  const history = useHistory();
  const { id } = useParams();
  const findItem = shoes.find((item) => {
    return item.id === Number(id);
  });
  const [alert, setAlert] = useState(true);
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
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
            <img src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${findItem.id + 1}.jpg `} width='100%' alt='shoesImg' />
          </div>
          <div className='col-md-6 mt-4'>
            <h4 className='pt-5'>{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}원</p>
            <p>재고 : {findItem.stock}</p>
            <button
              className='btn btn-primary addCartBtn'
              onClick={() => {
                shoes.dispatch({ type: "addCart", data: { id: findItem.id, name: findItem.title, quan: 1 } });
              }}>
              장바구니
            </button>
            <button
              className='btn btn-primary goBackBtn'
              onClick={() => {
                history.goBack();
              }}>
              뒤로가기
            </button>
          </div>
        </div>
      </div>

      <Nav className='detailNav'>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setActive(true);
              setTab(0);
            }}>
            정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setActive(true);
              setTab(1);
            }}>
            후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setActive(true);
              setTab(2);
            }}>
            문의
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} setActive={setActive} findItem={findItem} />
    </>
  );
}

function TabContent({ tab, setActive, findItem }) {
  useEffect(() => {
    setActive(true);
  });

  if (tab === 0) {
    return (
      <div className='detailTabContent'>
        <h3>정보</h3>
        <img src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${findItem.id + 1}.jpg `} width='50%' alt='shoesImg' />
      </div>
    );
  } else if (tab === 1) {
    return (
      <div className='detailTabContent'>
        <h3>후기</h3>
      </div>
    );
  } else if (tab === 2) {
    return (
      <div className='detailTabContent'>
        <h3>문의</h3>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    state: state.reducer,
    alertOpen: state.reducer2,
  };
}

export default connect(stateToProps)(Detail);
