"use strict";
const React = require("react");
const MyDiscussions_1 = require('./MyDiscussions');
const AddDiscussion_1 = require('./AddDiscussion');
class SafetyDiscussions extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    // Main renderer.
    render() {
        return (React.createElement("div", null, 
            React.createElement(MyDiscussions_1.MyDiscussions, null), 
            React.createElement(AddDiscussion_1.AddDiscussion, {NewDiscussionCreated: this.newDiscussionCreated.bind(this)})));
    }
    // New discussion has been created.
    newDiscussionCreated(discussion) {
        alert(discussion);
    }
}
exports.SafetyDiscussions = SafetyDiscussions;
//# sourceMappingURL=SafetyDiscussions.js.map