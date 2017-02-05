"use strict";
const React = require("react");
const Button_1 = require('office-ui-fabric-react/lib/Button');
const Dialog_1 = require('office-ui-fabric-react/lib/Dialog');
const Discussion_1 = require('./Discussion');
class AddDiscussion extends React.Component {
    constructor() {
        super();
        this.state = {
            showDialog: false
        };
    }
    // Main renderer.
    render() {
        return (React.createElement("div", null, 
            React.createElement(Button_1.Button, {description: 'Opens the dialog to create a discussion', onClick: this.showDialog.bind(this)}, "Add Safety Discussion"), 
            React.createElement(Dialog_1.Dialog, {isOpen: this.state.showDialog, type: Dialog_1.DialogType.close, onDismiss: this.closeDialog.bind(this), title: 'Add Discussion', subText: 'Please enter the details for the safety discussion.', isBlocking: false, closeButtonAriaLabel: 'Close'}, 
                React.createElement(Discussion_1.Discussion, {FormMode: Discussion_1.FormMode.New, Discussion: null})
            )));
    }
    showDialog() {
        this.setState({ showDialog: true });
    }
    closeDialog() {
        this.setState({ showDialog: false });
    }
}
exports.AddDiscussion = AddDiscussion;
//# sourceMappingURL=AddDiscussion.js.map