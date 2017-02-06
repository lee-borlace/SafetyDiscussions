import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { SafetyDiscussions } from './components/SafetyDiscussions';

// Polyfill Promise.
import { polyfill } from 'es6-promise';
polyfill();

ReactDOM.render(
    <SafetyDiscussions />,
    document.getElementById('reactRoot')
);

