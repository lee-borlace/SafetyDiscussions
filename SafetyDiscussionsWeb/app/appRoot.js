"use strict";
const React = require("react");
const ReactDOM = require('react-dom');
// Polyfill Promise.
const es6_promise_1 = require('es6-promise');
es6_promise_1.polyfill();
ReactDOM.render(React.createElement("div", null, "Hello from React JS!"), document.getElementById('reactRoot'));
//# sourceMappingURL=appRoot.js.map