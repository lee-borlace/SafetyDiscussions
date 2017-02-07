import * as React from "react";
import * as ReactDOM from 'react-dom';

import { List } from 'office-ui-fabric-react/lib/List';
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';


import { DiscussionListItem } from './DiscussionListItem';

import { SafetyDiscussion } from '../models/SafetyDiscussion';

export interface IMyDiscussionsProps {
    MyDiscussions: SafetyDiscussion[];
}

export class MyDiscussions extends React.Component<IMyDiscussionsProps, undefined> {

    render() {

        return (
            <div>

                {this.props.MyDiscussions.length <= 0 &&
                    <MessageBar>No discussions to show here yet.</MessageBar>
                }

                {this.props.MyDiscussions.length > 0 &&
                    <List
                        items={this.props.MyDiscussions}
                        onRenderCell={(item, index) =>
                            (
                                <DiscussionListItem Discussion={item} />
                            )}
                        />
                }
            </div>
        );
    }
}