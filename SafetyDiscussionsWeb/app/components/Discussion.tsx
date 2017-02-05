import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { Spinner, SpinnerType } from 'office-ui-fabric-react/lib/Spinner';

import { SafetyDiscussion } from '../models/SafetyDiscussion';
import { DiscussionService } from '../services/DiscussionService';

export enum FormMode {
    New,
    Edit
}

export interface IDiscussionProps {
    FormMode: FormMode;
    Discussion: SafetyDiscussion;
}

export interface IDiscussionState {
    Discussion?: SafetyDiscussion;
    IsSaving?: boolean;
    SaveClicked?: boolean;
    IsValid?: boolean;
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
            Discussion: this.props.FormMode == FormMode.Edit ? this.props.Discussion : new SafetyDiscussion(),
            IsSaving: false,
            IsValid: true
        };
    }

    // Main renderer.
    render() {

        return (
            <div>

                {!this.state.IsValid &&

                    <div>
                        <MessageBar
                            messageBarType={MessageBarType.error}
                            >
                            Please fill in all required information.
                        </MessageBar>
                        <br />
                    </div>
                }


                {!this.state.IsSaving &&
                    <DatePicker
                        placeholder='Enter date of discussion'
                        strings={DayPickerStrings}
                        onSelectDate={this.OnDateChanged.bind(this)}
                        />
                }
                <TextField
                    label='Location'
                    required={true}
                    placeholder='Enter location'
                    onChanged={this.OnLocationChanged.bind(this)}
                    disabled={this.state.IsSaving}
                    />

                <TextField
                    label='Subject'
                    required={true}
                    multiline
                    resizable={false}
                    placeholder='Enter subject'
                    onChanged={this.OnSubjectChanged.bind(this)}
                    disabled={this.state.IsSaving}
                    />

                <TextField
                    label='Outcome'
                    required={true}
                    multiline
                    resizable={false}
                    placeholder='Enter outcome'
                    onChanged={this.OnOutcomeChanged.bind(this)}
                    disabled={this.state.IsSaving}
                    />


                {this.state.IsSaving &&

                    <Spinner label='Saving discussion...' />
                }

                <DialogFooter>
                    <Button
                        buttonType={ButtonType.primary}
                        onClick={this.Save.bind(this)}
                        disabled={this.state.IsSaving}
                    >
                        Save
                    </Button>
                    <Button>Cancel</Button>
                </DialogFooter>
            </div>
        );
    }



    private Validate():boolean {

        let valid: boolean = true;

        if (
            !this.state.Discussion.DiscussionDate ||
            !this.state.Discussion.DiscussionLocation ||
            !this.state.Discussion.Subject ||
            !this.state.Discussion.Outcomes
        ) {
            valid = false;
        }

        this.setState({
            IsValid: valid
        });

        return valid;
    }



    private Save() {

        var valid = this.Validate();

        if (valid) {

            this.setState({
                IsSaving: true
            });

            let service: DiscussionService = new DiscussionService();
            service.SaveDiscussion(this.state.Discussion);
        }

    }


    private OnDateChanged(date: Date) {
        this.UpdatePropertiesOfDiscussion(null, date, null, null, null, null);
    }

    private OnLocationChanged(text: string) {
        this.UpdatePropertiesOfDiscussion(null, null, text, null, null, null);
    }

    private OnSubjectChanged(text: string) {
        this.UpdatePropertiesOfDiscussion(null, null, null, null, text, null);
    }

    private OnOutcomeChanged(text: string) {
        this.UpdatePropertiesOfDiscussion(null, null, null, null, null, text);
    }


    private UpdatePropertiesOfDiscussion(
        observer?: string,
        discussionDate?: Date,
        discussionLocation?: string,
        discussedWith?: string,
        subject?: string,
        outcomes?: string): void {

        this.setState(function (prevState, props) {

            let updatedDiscussion: SafetyDiscussion = this.CloneDiscussion(prevState.Discussion);

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
            } as IDiscussionState;
        });

        console.log(this.state.Discussion);
    }



    private CloneDiscussion(discussion: SafetyDiscussion): SafetyDiscussion {

        return {
            Observer: discussion.Observer,
            DiscussionDate: discussion.DiscussionDate,
            DiscussionLocation: discussion.DiscussionLocation,
            DiscussedWith: discussion.DiscussedWith,
            Subject: discussion.Subject,
            Outcomes: discussion.Outcomes
        }

    }
}