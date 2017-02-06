import * as React from "react";
import * as ReactDOM from 'react-dom';
import { SafetyDiscussion } from '../models/SafetyDiscussion';
import { MyDiscussions } from './MyDiscussions';
import { AddDiscussion } from './AddDiscussion';

export interface ISafetyDiscussionsProps {
}

export interface ISafetyDiscussionsState {
    MyDiscussions: SafetyDiscussion[];
}


export class SafetyDiscussions extends React.Component<ISafetyDiscussionsProps, ISafetyDiscussionsState> {

    constructor() {
        super();
        this.state = {
            MyDiscussions: []
        };
    }

    // Main renderer.
    render() {

        return (
            <div>
                <MyDiscussions
                    MyDiscussions={this.state.MyDiscussions}
                />
                <AddDiscussion
                    NewDiscussionCreated={this.newDiscussionCreated.bind(this)}
                />  
            </div>
        );
    }

    // New discussion has been created, add it to state.
    private newDiscussionCreated(discussion: SafetyDiscussion) {

        console.log("SafetyDiscussions.newDiscussionCreated()");

        this.setState((prevState, props) => {

            let discussions: SafetyDiscussion[] = [];

            prevState.MyDiscussions.forEach((x) => {
                discussions.push(Object.assign({}, x) );
            })

            discussions.push(discussion);

            return {
                MyDiscussions: discussions
            } as ISafetyDiscussionsState;
        });


    }

   
}