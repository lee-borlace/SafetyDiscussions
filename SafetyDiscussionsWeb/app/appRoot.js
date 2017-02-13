"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const SafetyDiscussions_1 = require("./components/SafetyDiscussions");
// Polyfill Promise.
const es6_promise_1 = require("es6-promise");
es6_promise_1.polyfill();
ReactDOM.render(React.createElement(SafetyDiscussions_1.SafetyDiscussions, null), document.getElementById('reactRoot'));
//# sourceMappingURL=appRoot.js.map