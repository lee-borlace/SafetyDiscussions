import * as React from "react";
import * as ReactDOM from 'react-dom';

import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

import { Discussion, FormMode } from './Discussion';
import { SafetyDiscussion } from '../models/SafetyDiscussion';

export interface IAddDiscussionProps {
    ShowDialog?: boolean;
    OnAddDiscussionClick?: () => void;
    OnSaveDiscussionClick?: () => void;
    OnCancelClick?: () => void;
    Discussion?: SafetyDiscussion;
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
                    <Discussion Discussion={this.props.Discussion} FormMode={FormMode.New} />
                    <DialogFooter>
                        <Button buttonType={ButtonType.primary} onClick={this.Save.bind(this)}>Save</Button>
                        <Button onClick={this.props.OnCancelClick}>Cancel</Button>
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }


    private HandleDiscussionChange(discussion: SafetyDiscussion) {
        
    }


    private Save() {

        this.props.OnSaveDiscussionClick();
    }

    
}