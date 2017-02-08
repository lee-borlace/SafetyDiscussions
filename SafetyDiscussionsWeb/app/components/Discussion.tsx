import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Promise } from 'es6-promise';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { Spinner, SpinnerType } from 'office-ui-fabric-react/lib/Spinner';
import { NormalPeoplePicker } from 'office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePicker';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { Label } from 'office-ui-fabric-react/lib/Label';

import { SafetyDiscussion } from '../models/SafetyDiscussion';
import { DiscussionService } from '../services/DiscussionService';

export enum FormMode {
    New,
    Edit
}

export interface IDiscussionProps {
    FormMode: FormMode;
    Discussion: SafetyDiscussion;
    DialogClose: () => void;
    NewDiscussionCreated: (discussion: SafetyDiscussion) => void;
}

export interface IDiscussionState {
    Discussion?: SafetyDiscussion;
    IsSaving?: boolean;
    SaveClicked?: boolean;
    IsValid?: boolean;
    IsError?: boolean;
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
            IsValid: true,
            IsError: false
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

                {this.state.IsError &&

                    <div>
                        <MessageBar
                            messageBarType={MessageBarType.error}
                            >
                            Sorry, there was a problem saving your data. Please refresh the page and try again.
                        </MessageBar>
                        <br />
                    </div>
                }



                {!this.state.IsSaving &&
                    <DatePicker
                        label='Discussion Date'
                        placeholder='Enter date of discussion'
                        strings={DayPickerStrings}
                        onSelectDate={date => this.UpdatePropertiesOfDiscussion(date, null, null, null, null)}
                        value={this.state.Discussion.DateISO} // This is a required workaround to stop the field from getting cleared out when state updates.
                        />
                }
               
                <TextField
                    label='Subject'
                    required={true}
                    multiline
                    resizable={false}
                    placeholder='Enter subject'
                    onChanged={this.OnSubjectChanged.bind(this)}
                    disabled={this.state.IsSaving}
                    />

                <Label>Discussed With</Label>


                <NormalPeoplePicker
                    onResolveSuggestions={this.OnFilterChanged.bind(this)}

                    getTextFromItem={(persona: IPersonaProps) => persona.primaryText}

                    pickerSuggestionsProps={{
                        suggestionsHeaderText: 'Suggested People',
                        noResultsFoundText: 'No results found',
                        loadingText: 'Loading'
                    }}

                    className={'ms-PeoplePicker'}

                    key={'normal'}

                    />


                <TextField
                    label='Location'
                    required={true}
                    placeholder='Enter location'
                    onChanged={this.OnLocationChanged.bind(this)}
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
                    <Button
                        onClick={this.props.DialogClose}
                        >Cancel
                    </Button>
                </DialogFooter>
            </div>
        );
    }


    private OnFilterChanged(filterText: string, currentPersonas: IPersonaProps[], limitResults?: number): Promise<IPersonaProps> {
        if (filterText) {
            let service: DiscussionService = new DiscussionService();
            return service.UserSearch(filterText, currentPersonas, limitResults);
        }
    }


    private Validate():boolean {

        let valid: boolean = true;

        if (
            !this.state.Discussion.DateISO ||
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
            service
                .SaveDiscussion(this.state.Discussion)
                .then((discussion: SafetyDiscussion ) => {
                    console.log("AddDiscussion.Save()");
                    console.log(discussion);
                    this.props.NewDiscussionCreated(discussion);
                })
                .catch((error: Error) => {

                    console.log(error);

                    this.setState({
                        IsError: true,
                        IsSaving: false
                    });
                });
            
        }

    }


    private OnDateChanged(date: Date) {
        this.UpdatePropertiesOfDiscussion(date, null, null, null, null);
    }

    private OnLocationChanged(text: string) {
        this.UpdatePropertiesOfDiscussion(null, text, null, null, null);
    }

    private OnSubjectChanged(text: string) {
        this.UpdatePropertiesOfDiscussion(null, null, null, text, null);
    }

    private OnOutcomeChanged(text: string) {
        this.UpdatePropertiesOfDiscussion(null, null, null, null, text);
    }


    private UpdatePropertiesOfDiscussion(
        discussionDate?: Date,
        discussionLocation?: string,
        discussedWith?: string,
        subject?: string,
        outcomes?: string): void {

        this.setState(function (prevState, props) {

            let updatedDiscussion: SafetyDiscussion = this.CloneDiscussion(prevState.Discussion);

            if (discussionDate) {
                updatedDiscussion.DateISO = discussionDate;
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
    }



    private CloneDiscussion(discussion: SafetyDiscussion): SafetyDiscussion {

        return {
            DateISO: discussion.DateISO,
            DiscussionLocation: discussion.DiscussionLocation,
            DiscussedWith: discussion.DiscussedWith,
            Subject: discussion.Subject,
            Outcomes: discussion.Outcomes
        }

    }
}