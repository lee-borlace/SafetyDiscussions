"use strict";
const React = require("react");
class DiscussionListItem extends React.Component {
    render() {
        return (React.createElement("div", null, 
            this.props.Discussion.DateISO, 
            this.props.Discussion.DiscussionLocation, 
            this.props.Discussion.Subject, 
            this.props.Discussion.Outcomes));
    }
}
exports.DiscussionListItem = DiscussionListItem;
//# sourceMappingURL=DiscussionListItem.js.map