import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "index.css";
import reportWebVitals from "reportWebVitals";

import Home from "features/home/Container";
import Airplane from "features/airplane/Container";
import WritingDream from "features/airplane/airplaneSubDomain/writingDream/Container";
import Certificate from "features/airplane/airplaneSubDomain/writingDream/writingDreamSubDomain/certificate/Container";
import History from "features/history/Container";
import Join from "features/join/Container";
import Login from "features/login/Container";
import FindAccount from "features/login/loginSubDomain/findAccount/Container";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* TODO: 컴포넌트 명은 HomeContainer고, 불러올때는 Home? */}
          <Route path="/airplane" element={<Airplane />}>
            <Route path="/write" element={<WritingDream />} />
            <Route path="/certificate" element={<Certificate />} />
            {/* TODO: 여기는 뎁스처리를 어떻게 해야하는걸까 */}
          </Route>
          <Route path="/history" element={<History />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />}>
            <Route path="/find" element={<FindAccount />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
