"use strict";
const React = require("react");
const Button_1 = require('office-ui-fabric-react/lib/Button');
const TextField_1 = require('office-ui-fabric-react/lib/TextField');
const DatePicker_1 = require('office-ui-fabric-react/lib/DatePicker');
const Dialog_1 = require('office-ui-fabric-react/lib/Dialog');
const MessageBar_1 = require('office-ui-fabric-react/lib/MessageBar');
const Spinner_1 = require('office-ui-fabric-react/lib/Spinner');
const SafetyDiscussion_1 = require('../models/SafetyDiscussion');
const DiscussionService_1 = require('../services/DiscussionService');
(function (FormMode) {
    FormMode[FormMode["New"] = 0] = "New";
    FormMode[FormMode["Edit"] = 1] = "Edit";
})(exports.FormMode || (exports.FormMode = {}));
var FormMode = exports.FormMode;
const DayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    shortDays: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],
    goToToday: 'Go to today'
};
class Discussion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Discussion: this.props.FormMode == FormMode.Edit ? this.props.Discussion : new SafetyDiscussion_1.SafetyDiscussion(),
            IsSaving: false,
            IsValid: true,
            IsError: false
        };
    }
    // Main renderer.
    render() {
        return (React.createElement("div", null, 
            !this.state.IsValid &&
                React.createElement("div", null, 
                    React.createElement(MessageBar_1.MessageBar, {messageBarType: MessageBar_1.MessageBarType.error}, "Please fill in all required information."), 
                    React.createElement("br", null)), 
            this.state.IsError &&
                React.createElement("div", null, 
                    React.createElement(MessageBar_1.MessageBar, {messageBarType: MessageBar_1.MessageBarType.error}, "Sorry, there was a problem saving your data. Please refresh the page and try again."), 
                    React.createElement("br", null)), 
            !this.state.IsSaving &&
                React.createElement(DatePicker_1.DatePicker, {label: 'Discussion Date', placeholder: 'Enter date of discussion', strings: DayPickerStrings, onSelectDate: date => this.UpdatePropertiesOfDiscussion(null, date, null, null, null, null), value: this.state.Discussion.DiscussionDate}), 
            React.createElement(TextField_1.TextField, {label: 'Location', required: true, placeholder: 'Enter location', onChanged: this.OnLocationChanged.bind(this), disabled: this.state.IsSaving}), 
            React.createElement(TextField_1.TextField, {label: 'Subject', required: true, multiline: true, resizable: false, placeholder: 'Enter subject', onChanged: this.OnSubjectChanged.bind(this), disabled: this.state.IsSaving}), 
            React.createElement(TextField_1.TextField, {label: 'Outcome', required: true, multiline: true, resizable: false, placeholder: 'Enter outcome', onChanged: this.OnOutcomeChanged.bind(this), disabled: this.state.IsSaving}), 
            this.state.IsSaving &&
                React.createElement(Spinner_1.Spinner, {label: 'Saving discussion...'}), 
            React.createElement(Dialog_1.DialogFooter, null, 
                React.createElement(Button_1.Button, {buttonType: Button_1.ButtonType.primary, onClick: this.Save.bind(this), disabled: this.state.IsSaving}, "Save"), 
                React.createElement(Button_1.Button, {onClick: this.props.DialogClose}, "Cancel"))));
    }
    Validate() {
        let valid = true;
        if (!this.state.Discussion.DiscussionDate ||
            !this.state.Discussion.DiscussionLocation ||
            !this.state.Discussion.Subject ||
            !this.state.Discussion.Outcomes) {
            valid = false;
        }
        this.setState({
            IsValid: valid
        });
        return valid;
    }
    Save() {
        var valid = this.Validate();
        if (valid) {
            this.setState({
                IsSaving: true
            });
            let service = new DiscussionService_1.DiscussionService();
            service
                .SaveDiscussion(this.state.Discussion)
                .then(() => {
                console.log(this.state.Discussion);
                this.props.DialogClose();
            })
                .catch(() => {
                this.setState({
                    IsError: true,
                    IsSaving: false
                });
            });
        }
    }
    OnDateChanged(date) {
        this.UpdatePropertiesOfDiscussion(null, date, null, null, null, null);
    }
    OnLocationChanged(text) {
        this.UpdatePropertiesOfDiscussion(null, null, text, null, null, null);
    }
    OnSubjectChanged(text) {
        this.UpdatePropertiesOfDiscussion(null, null, null, null, text, null);
    }
    OnOutcomeChanged(text) {
        this.UpdatePropertiesOfDiscussion(null, null, null, null, null, text);
    }
    UpdatePropertiesOfDiscussion(observer, discussionDate, discussionLocation, discussedWith, subject, outcomes) {
        this.setState(function (prevState, props) {
            let updatedDiscussion = this.CloneDiscussion(prevState.Discussion);
            if (observer) {
                updatedDiscussion.Observer = observer;
            }
            if (discussionDate) {
                updatedDiscussion.DiscussionDate = discussionDate;
            }
            if (discussionLocation) {
                updatedDiscussion.DiscussionLocation = discussionLocation;
            }
            if (discussedWith) {
                updatedDiscussion.DiscussedWith = discussedWith;
            }
            if (subject) {
                updatedDiscussion.Subject = subject;
            }
            if (outcomes) {
                updatedDiscussion.Outcomes = outcomes;
            }
            return {
                Discussion: updatedDiscussion
            };
        });
        console.log(this.state.Discussion);
    }
    CloneDiscussion(discussion) {
        return {
            Observer: discussion.Observer,
            DiscussionDate: discussion.DiscussionDate,
            DiscussionLocation: discussion.DiscussionLocation,
            DiscussedWith: discussion.DiscussedWith,
            Subject: discussion.Subject,
            Outcomes: discussion.Outcomes
        };
    }
}
exports.Discussion = Discussion;
//# sourceMappingURL=Discussion.js.map