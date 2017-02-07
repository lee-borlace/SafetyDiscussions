"use strict";
const React = require("react");
const Button_1 = require('office-ui-fabric-react/lib/Button');
const Dialog_1 = require('office-ui-fabric-react/lib/Dialog');
const Discussion_1 = require('./Discussion');
class AddDiscussion extends React.Component {
    constructor() {
        super();
        this.state = {
            ShowDialog: false,
        };
    }
    // Main renderer.
    render() {
        return (React.createElement("div", {className: "sd-addDiscussion"}, 
            React.createElement(Button_1.Button, {description: 'Opens the dialog to create a discussion', onClick: this.showDialog.bind(this), buttonType: Button_1.ButtonType.hero, icon: 'Add'}, "Add Safety Discussion"), 
            React.createElement(Dialog_1.Dialog, {isOpen: this.state.ShowDialog, type: Dialog_1.DialogType.close, onDismiss: this.closeDialog.bind(this), title: 'Add Discussion', subText: 'Please enter the details for the safety discussion.', isBlocking: false, closeButtonAriaLabel: 'Close'}, 
                React.createElement(Discussion_1.Discussion, {FormMode: Discussion_1.FormMode.New, Discussion: null, DialogClose: this.closeDialog.bind(this), NewDiscussionCreated: this.newDiscussionCreated.bind(this)})
            )));
    }
    // New discussion has been created. Pass up to parent.
    newDiscussionCreated(discussion) {
        console.log("AddDiscussion.newDiscussionCreated()");
        this.setState({ ShowDialog: false });
        this.props.NewDiscussionCreated(discussion);
    }
    showDialog() {
        this.setState({ ShowDialog: true });
    }
    closeDialog() {
        this.setState({ ShowDialog: false });
    }
}
exports.AddDiscussion = AddDiscussion;
//# sourceMappingURL=AddDiscussion.js.map