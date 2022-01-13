import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// HashRouter -> 사이트 주소 뒤에 #이 붙는데
// # 뒤에 적는 것은 서버로 전달되지 않음
// 즉, 라우팅을 안전하게 할 수 있게 도와줌
// BrowserRouter -> 서버에서 서버 라우팅을 방지하는 API 필요
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
