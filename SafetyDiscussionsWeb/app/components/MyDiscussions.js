"use strict";
const React = require("react");
const List_1 = require('office-ui-fabric-react/lib/List');
const DiscussionListItem_1 = require('./DiscussionListItem');
class MyDiscussions extends React.Component {
    render() {
        return (React.createElement(List_1.List, {items: this.props.MyDiscussions, onRenderCell: (item, index) => (React.createElement(DiscussionListItem_1.DiscussionListItem, {Discussion: item}))}));
    }
}
exports.MyDiscussions = MyDiscussions;
//# sourceMappingURL=MyDiscussions.js.map