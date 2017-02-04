import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Polyfill Promise.
import { polyfill } from 'es6-promise';
polyfill();

ReactDOM.render(
    <div>Hello from React JS!</div>,
    document.getElementById('reactRoot')
);