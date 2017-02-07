import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

import { Discussion, FormMode } from './Discussion';
import { SafetyDiscussion } from '../models/SafetyDiscussion';

export interface IAddDiscussionProps {
    NewDiscussionCreated: (discussion: SafetyDiscussion) => void;
}

export interface IAddDiscussionState {
    ShowDialog: boolean;
}


export class AddDiscussion extends React.Component<IAddDiscussionProps, IAddDiscussionState> {

    constructor() {
        super();
        this.state = {
            ShowDialog: false,
        };
    }

    // Main renderer.
    render() {

        return (
            <div className="sd-addDiscussion">
                <Button description='Opens the dialog to create a discussion' onClick={this.showDialog.bind(this)} buttonType={ButtonType.hero} icon='Add'>
                    Add Safety Discussion
                </Button>
                <Dialog
                    isOpen={this.state.ShowDialog}
                    type={DialogType.close}
                    onDismiss={this.closeDialog.bind(this)}
                    title='Add Discussion'
                    subText='Please enter the details for the safety discussion.'
                    isBlocking={false}
                    closeButtonAriaLabel='Close'
                    >
                    <Discussion
                        FormMode={FormMode.New}
                        Discussion={null}
                        DialogClose={this.closeDialog.bind(this)}
                        NewDiscussionCreated={this.newDiscussionCreated.bind(this)} />
                </Dialog>
            </div>
        );
    }

    // New discussion has been created. Pass up to parent.
    private newDiscussionCreated(discussion: SafetyDiscussion) {
        console.log("AddDiscussion.newDiscussionCreated()");
        this.setState({ ShowDialog: false });
        this.props.NewDiscussionCreated(discussion);
    }

    private showDialog() {
        this.setState({ ShowDialog: true });
    }

    private closeDialog() {
        this.setState({ ShowDialog: false });
    }
}