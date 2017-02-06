"use strict";
const React = require("react");
class DiscussionListItem extends React.Component {
    render() {
        return (React.createElement("div", null, 
            this.props.Discussion.DateISO, 
            React.createElement("br", null), 
            this.props.Discussion.DiscussionLocation, 
            React.createElement("br", null), 
            this.props.Discussion.Subject, 
            React.createElement("br", null), 
            this.props.Discussion.Outcomes, 
            React.createElement("br", null)));
    }
}
exports.DiscussionListItem = DiscussionListItem;
//# sourceMappingURL=DiscussionListItem.js.map