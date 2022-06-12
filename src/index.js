import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// HashRouter -> 사이트 주소 뒤에 #이 붙는데
// # 뒤에 적는 것은 서버로 전달되지 않음
// 즉, 라우팅을 안전하게 할 수 있게 도와줌
// BrowserRouter -> 서버에서 서버 라우팅을 방지하는 API 필요
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import ScrollToTop from "./ScrollToTop";

let defaultState = [];

function reducer(state = defaultState, action) {
  if (action.type === "addCart") {
    alert("장바구니에 추가되었습니다.");
    const matchId = state.findIndex((a) => {
      return a.id === action.data.id;
    });

    if (matchId >= 0) {
      const copy = [...state];
      copy[matchId].quan++;
    } else {
      const copy = [...state];
      copy.push(action.data);
      return copy;
    }
  } else if (action.type === "countUp") {
    const copy = [...state];
    copy[action.data].quan++;
    return copy;
  } else if (action.type === "countDown") {
    const copy = [...state];
    copy[action.data].quan--;
    return copy;
  } else {
    return state;
  }
}

const alertDefault = true;

function reducer2(state = alertDefault, action) {
  if (action.type === "alertClose") {
    return false;
  } else {
    return state;
  }
}

const store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
