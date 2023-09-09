import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { createBrowserHistory } from "history";
import App from "./App";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  background-color: #FFFFFF;
  color: #000000;
`;

export const history = createBrowserHistory();

ReactDOM.render(
  <FlexWrapper>
    <App />
  </FlexWrapper>,
  document.getElementById("root")
);

serviceWorker.unregister();
