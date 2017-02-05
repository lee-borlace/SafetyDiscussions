"use strict";
const React = require("react");
const Button_1 = require('office-ui-fabric-react/lib/Button');
const Dialog_1 = require('office-ui-fabric-react/lib/Dialog');
class AddDiscussion extends React.Component {
    // Main renderer.
    render() {
        return (React.createElement("div", null, 
            React.createElement(Button_1.Button, {description: 'Opens the dialog to create a discussion', onClick: this.props.OnAddDiscussionClick}, "Add Safety Discussion"), 
            React.createElement(Dialog_1.Dialog, {isOpen: this.props.ShowDialog, type: Dialog_1.DialogType.close, onDismiss: this.props.OnCancelClick, title: 'Add Discussion', subText: 'Please enter the details for the safety discussion.', isBlocking: false, closeButtonAriaLabel: 'Close'}, 
                React.createElement(Dialog_1.DialogFooter, null, 
                    React.createElement(Button_1.Button, {buttonType: Button_1.ButtonType.primary, onClick: this.props.OnSaveDiscussionClick}, "Save"), 
                    React.createElement(Button_1.Button, {onClick: this.props.OnCancelClick}, "Cancel"))
            )));
    }
}
exports.AddDiscussion = AddDiscussion;
//# sourceMappingURL=AddDiscussion.js.map