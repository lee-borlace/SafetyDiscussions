"use strict";
const React = require("react");
const ReactDOM = require('react-dom');
const react_redux_1 = require('react-redux');
const redux_1 = require('redux');
const redux_thunk_1 = require('redux-thunk');
const MainReducer_1 = require('./redux/reducers/MainReducer');
const DiscussionContainer_1 = require('./redux/containers/DiscussionContainer');
// Polyfill Promise.
const es6_promise_1 = require('es6-promise');
es6_promise_1.polyfill();
// Create the store.
let store = redux_1.createStore(MainReducer_1.MainReducer, redux_1.applyMiddleware(redux_thunk_1.default));
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, 
    React.createElement(DiscussionContainer_1.DiscussionContainer, null)
), document.getElementById('reactRoot'));
//# sourceMappingURL=appRoot.js.map