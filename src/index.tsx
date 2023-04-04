import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import reportWebVitals from "reportWebVitals";

import ToastProvider from "shared/components/Toast/ToastProvider";
import App from "features/App/Container";

import GlobalStyle from "GlobalStyle";
import { Container } from "index.style";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Container>
        <ToastProvider>
          <App />
        </ToastProvider>
      </Container>
      <GlobalStyle />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
