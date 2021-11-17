import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={'/'}>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
