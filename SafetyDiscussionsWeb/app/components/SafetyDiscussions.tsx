import * as React from "react";
import * as ReactDOM from 'react-dom';
import { SafetyDiscussion } from '../models/SafetyDiscussion';
import { MyDiscussions } from './MyDiscussions';
import { AddDiscussion } from './AddDiscussion';

import { Spinner, SpinnerType } from 'office-ui-fabric-react/lib/Spinner';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

import { DiscussionService } from '../services/DiscussionService';

export interface ISafetyDiscussionsProps {
}

export interface ISafetyDiscussionsState {
    MyDiscussions?: SafetyDiscussion[];
    IsLoading?: boolean;
    IsError?: boolean;
}


export class SafetyDiscussions extends React.Component<ISafetyDiscussionsProps, ISafetyDiscussionsState> {

    constructor() {
        super();
        this.state = {
            MyDiscussions: [],
            IsLoading: false,
            IsError: false
        };
    }

    componentDidMount() {
        this.LoadDiscussions()
    }


    // Main renderer.
    render() {

        return (
            <div className="ms-Grid"> 
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg4">

                        {this.state.IsError &&
                            <div>
                                <MessageBar
                                    messageBarType={MessageBarType.error}
                                    >
                                    Sorry, there was a problem loading your data. Please refresh the page and try again.
                                </MessageBar>
                                <br />
                            </div>
                        }

                        {this.state.IsLoading &&
                            <Spinner label='Loading discussions...' />
                        }

                        {!this.state.IsLoading && !this.state.IsError &&

                            <div>

                                <AddDiscussion
                                    NewDiscussionCreated={this.NewDiscussionCreated.bind(this)}
                                    />

                                <MyDiscussions
                                    MyDiscussions={this.state.MyDiscussions}
                                    />

                        

                            </div>
                        }

                    </div>
                </div>
            </div>
        );
    }

    // New discussion has been created. Re-load discussions.
    private NewDiscussionCreated(discussion: SafetyDiscussion) {

        console.log("SafetyDiscussions.newDiscussionCreated()");

        // Re-load discussions.
        this.LoadDiscussions();


    }


    private LoadDiscussions() {
        // Load existing discussions.
        this.setState({ IsLoading: true });

        let service: DiscussionService = new DiscussionService();
        service
            .GetMyDiscussions()
            .then((discussions: SafetyDiscussion[]) => {
                this.setState({
                    IsError: false,
                    IsLoading: false,
                    MyDiscussions: discussions
                });
            })
            .catch((error: Error) => {

                console.log(error);

                this.setState({
                    IsError: true,
                    IsLoading: false
                });
            });
    }
   
}