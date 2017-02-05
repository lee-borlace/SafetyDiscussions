import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

import { DiscussionForm, FormMode } from './DiscussionForm';

export interface IAddDiscussionProps {
	
}

export interface IAddDiscussionState {
    showDialog: boolean;
}


export class AddDiscussion extends React.Component<IAddDiscussionProps, IAddDiscussionState> {

    constructor() {
        super();
        this.state = {
            showDialog: false
        };
    }

    // Main renderer.
    render() {

        return (
            <div>
                <Button description='Opens the dialog to create a discussion' onClick={this.showDialog.bind(this)}>
                    Add Safety Discussion
                </Button>
                <Dialog
                    isOpen={this.state.showDialog}
                    type={DialogType.close}
                    onDismiss={this.closeDialog.bind(this)}
                    title='Add Discussion'
                    subText='Please enter the details for the safety discussion.'
                    isBlocking={false}
                    closeButtonAriaLabel='Close'
                    >
                    <DiscussionForm FormMode={FormMode.New} />
                    <DialogFooter>
                        <Button buttonType={ButtonType.primary} onClick={this.closeDialog.bind(this)}>Save</Button>
                        <Button onClick={this.closeDialog.bind(this)}>Cancel</Button>
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    private showDialog() {
        this.setState({ showDialog: true });
    }

    private closeDialog() {
        this.setState({ showDialog: false });
    }
}