import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { AddDiscussion } from './components/AddDiscussion';


// Polyfill Promise.
import { polyfill } from 'es6-promise';
polyfill();

ReactDOM.render(
    <AddDiscussion />,
    document.getElementById('reactRoot')
);

