"use strict";
const React = require("react");
class DiscussionListItem extends React.Component {
    render() {
        return (React.createElement("div", { className: "sd-discussion" },
            React.createElement("div", { className: "ms-bgColor-neutralLighterAlt" },
                React.createElement("div", { className: "ms-font-l ms-fontWeight-semibold" }, this.props.Discussion.Subject),
                React.createElement("div", { className: "ms-font-m" }, this.GetFormattedDate(this.props.Discussion.DateISO)),
                React.createElement("i", { className: "ms-Icon ms-Icon--POI", "aria-hidden": "true" }),
                " ",
                React.createElement("span", { className: "ms-font-m" }, this.props.Discussion.DiscussionLocation))));
    }
    GetFormattedDate(date) {
        // TODO : Why do we need to do this?
        var date = new Date(date);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }
}
exports.DiscussionListItem = DiscussionListItem;
//# sourceMappingURL=DiscussionListItem.js.map