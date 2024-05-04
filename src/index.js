import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FlexWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FlexWrapper>,
);

serviceWorker.unregister();
