"use strict";
const React = require("react");
const ReactDOM = require('react-dom');
const MyDiscussions_1 = require('./components/MyDiscussions');
// Polyfill Promise.
const es6_promise_1 = require('es6-promise');
es6_promise_1.polyfill();
ReactDOM.render(React.createElement(MyDiscussions_1.MyDiscussions, null), document.getElementById('reactRoot'));
//# sourceMappingURL=appRoot.js.map