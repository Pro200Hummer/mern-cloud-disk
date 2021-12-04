import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Light", serif;
  }
`;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={'/'}>
            <Global/>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
