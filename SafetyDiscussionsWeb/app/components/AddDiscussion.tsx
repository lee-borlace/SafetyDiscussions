import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

import { Discussion, FormMode } from './Discussion';

export interface IAddDiscussionProps {
    ShowDialog?: boolean;
    OnAddDiscussionClick?: () => void;
    OnSaveDiscussionClick?: () => void;
    OnCancelClick?: () => void;
}


export class AddDiscussion extends React.Component<IAddDiscussionProps, undefined> {


    // Main renderer.
    render() {

        return (
            <div>
                <Button description='Opens the dialog to create a discussion' onClick={this.props.OnAddDiscussionClick}>
                    Add Safety Discussion
                </Button>
                <Dialog
                    isOpen={this.props.ShowDialog}
                    type={DialogType.close}
                    onDismiss={this.props.OnCancelClick}
                    title='Add Discussion'
                    subText='Please enter the details for the safety discussion.'
                    isBlocking={false}
                    closeButtonAriaLabel='Close'
                    >
                    <DialogFooter>
                        <Button buttonType={ButtonType.primary} onClick={this.props.OnSaveDiscussionClick}>Save</Button>
                        <Button onClick={this.props.OnCancelClick}>Cancel</Button>
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    
}