"use strict";
const React = require("react");
const TextField_1 = require('office-ui-fabric-react/lib/TextField');
const DatePicker_1 = require('office-ui-fabric-react/lib/DatePicker');
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
    // Main renderer.
    render() {
        return (React.createElement("div", null, 
            React.createElement(DatePicker_1.DatePicker, {placeholder: 'Enter date of discussion', strings: DayPickerStrings}), 
            React.createElement(TextField_1.TextField, {label: 'Location', required: true, placeholder: 'Enter location'}), 
            React.createElement(TextField_1.TextField, {label: 'Subject', required: true, multiline: true, resizable: false, placeholder: 'Enter subject'}), 
            React.createElement(TextField_1.TextField, {label: 'Outcome', required: true, multiline: true, resizable: false, placeholder: 'Enter outcome'})));
    }
}
exports.Discussion = Discussion;
//# sourceMappingURL=Discussion.js.map