import * as React from "react";
import * as ReactDOM from 'react-dom';
import { SafetyDiscussion } from '../models/SafetyDiscussion';
import { MyDiscussions } from './MyDiscussions';
import { AddDiscussion } from './AddDiscussion';

export interface ISafetyDiscussionsProps {
}

export interface ISafetyDiscussionsState {
}


export class SafetyDiscussions extends React.Component<ISafetyDiscussionsProps, ISafetyDiscussionsState> {

    constructor() {
        super();
        this.state = {
        };
    }

    // Main renderer.
    render() {

        return (
            <div>
                <MyDiscussions />
                <AddDiscussion
                    NewDiscussionCreated={this.newDiscussionCreated.bind(this)}
                />  
            </div>
        );
    }

    // New discussion has been created.
    private newDiscussionCreated(discussion: SafetyDiscussion) {
        alert(discussion);
    }

   
}