﻿import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { AddDiscussion } from './components/AddDiscussion';
import { MainReducer } from './redux/reducers/MainReducer';
import { DiscussionActionCreator } from './redux/actions/DiscussionActionCreator';
import { DiscussionContainer } from './redux/containers/DiscussionContainer';

// Polyfill Promise.
import { polyfill } from 'es6-promise';
polyfill();


// Create the store.
let store = createStore(
    MainReducer,
    applyMiddleware(
        thunk, // lets us dispatch() functions
    )
);

ReactDOM.render(
    <Provider store={store}>
        <DiscussionContainer />
    </Provider>,
    document.getElementById('reactRoot')
);

