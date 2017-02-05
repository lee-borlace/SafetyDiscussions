"use strict";
const React = require("react");
const Button_1 = require('office-ui-fabric-react/lib/Button');
const TextField_1 = require('office-ui-fabric-react/lib/TextField');
const DatePicker_1 = require('office-ui-fabric-react/lib/DatePicker');
const Dialog_1 = require('office-ui-fabric-react/lib/Dialog');
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
            SaveClicked: false
        };
    }
    // Main renderer.
    render() {
        return (React.createElement("div", null, 
            React.createElement(DatePicker_1.DatePicker, {placeholder: 'Enter date of discussion', strings: DayPickerStrings, onSelectDate: this.OnDateChanged.bind(this)}), 
            React.createElement(TextField_1.TextField, {label: 'Location', required: true, placeholder: 'Enter location', onChanged: this.OnLocationChanged.bind(this), onGetErrorMessage: this.GetErrorMessageRequired.bind(this), deferredValidationTime: 500}), 
            React.createElement(TextField_1.TextField, {label: 'Subject', required: true, multiline: true, resizable: false, placeholder: 'Enter subject', onChanged: this.OnSubjectChanged.bind(this), onGetErrorMessage: this.GetErrorMessageRequired.bind(this), deferredValidationTime: 500}), 
            React.createElement(TextField_1.TextField, {label: 'Outcome', required: true, multiline: true, resizable: false, placeholder: 'Enter outcome', onChanged: this.OnOutcomeChanged.bind(this), onGetErrorMessage: this.GetErrorMessageRequired.bind(this), deferredValidationTime: 500}), 
            React.createElement(Dialog_1.DialogFooter, null, 
                React.createElement(Button_1.Button, {buttonType: Button_1.ButtonType.primary, onClick: this.Save.bind(this)}, "Save"), 
                React.createElement(Button_1.Button, null, "Cancel"))));
    }
    GetErrorMessageRequired(value) {
        if (!value) {
            return 'Please specify a value';
        }
        else {
            return '';
        }
    }
    Save() {
        this.setState({
            SaveClicked: true,
            IsSaving: false
        });
        let service = new DiscussionService_1.DiscussionService();
        service.SaveDiscussion(this.state.Discussion);
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