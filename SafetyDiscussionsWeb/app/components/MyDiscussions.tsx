import * as React from "react";
import * as ReactDOM from 'react-dom';

import { List } from 'office-ui-fabric-react/lib/List';
import { DiscussionListItem } from './DiscussionListItem';

import { SafetyDiscussion } from '../models/SafetyDiscussion';

export interface IMyDiscussionsProps {
    MyDiscussions: SafetyDiscussion[];
}


export class MyDiscussions extends React.Component<IMyDiscussionsProps, undefined> {

    render() {

        return (
            <List
                items={this.props.MyDiscussions}
                onRenderCell={(item, index) =>
                    (
                        <DiscussionListItem Discussion={item} />
                    )}
                />
        );
    }
}