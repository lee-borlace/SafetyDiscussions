"use strict";
const React = require("react");
const MyDiscussions_1 = require('./MyDiscussions');
const AddDiscussion_1 = require('./AddDiscussion');
class SafetyDiscussions extends React.Component {
    constructor() {
        super();
        this.state = {
            MyDiscussions: []
        };
    }
    // Main renderer.
    render() {
        return (React.createElement("div", null, 
            React.createElement(MyDiscussions_1.MyDiscussions, {MyDiscussions: this.state.MyDiscussions}), 
            React.createElement(AddDiscussion_1.AddDiscussion, {NewDiscussionCreated: this.newDiscussionCreated.bind(this)})));
    }
    // New discussion has been created, add it to state.
    newDiscussionCreated(discussion) {
        console.log("SafetyDiscussions.newDiscussionCreated()");
        this.setState((prevState, props) => {
            let discussions = [];
            prevState.MyDiscussions.forEach((x) => {
                discussions.push(Object.assign({}, x));
            });
            discussions.push(discussion);
            return {
                MyDiscussions: discussions
            };
        });
    }
}
exports.SafetyDiscussions = SafetyDiscussions;
//# sourceMappingURL=SafetyDiscussions.js.map