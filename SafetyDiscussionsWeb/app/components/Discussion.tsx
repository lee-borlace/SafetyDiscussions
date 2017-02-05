import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import { SafetyDiscussion } from '../models/SafetyDiscussion';

export enum FormMode {
    New,
    Edit
}

export interface IDiscussionProps {
    FormMode: FormMode;
    Discussion: SafetyDiscussion;
}

export interface IDiscussionState {
    Discussion: SafetyDiscussion;
}


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

export class Discussion extends React.Component<IDiscussionProps, IDiscussionState> {

    constructor(props: IDiscussionProps) {
        super(props);

        this.state = {
            Discussion: this.props.Discussion ? this.props.Discussion : new SafetyDiscussion()
        };
    }

    // Main renderer.
    render() {

        return (
            <div>
                <DatePicker placeholder='Enter date of discussion' strings={DayPickerStrings} />
                <TextField label='Location' required={true} placeholder='Enter location' onChanged={this.onLocationChanged.bind(this)} />
                <TextField label='Subject' required={true} multiline resizable={false} placeholder='Enter subject' />
                <TextField label='Outcome' required={true} multiline resizable={false} placeholder='Enter outcome' />
            </div>
        );
    }


    private onLocationChanged(text: string) {

        this.setState(function (prevState, props) {

            prevState.Discussion.DiscussionLocation = text;

            return {
                Discussion: prevState
            } as IDiscussionState;
        });

      
           
    }
}