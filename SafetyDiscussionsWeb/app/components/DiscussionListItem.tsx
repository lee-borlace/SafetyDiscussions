import * as React from "react";
import * as ReactDOM from 'react-dom';

import { SafetyDiscussion } from '../models/SafetyDiscussion';

export interface IDiscussionListItemProps {
    Discussion: SafetyDiscussion;
}


export class DiscussionListItem extends React.Component<IDiscussionListItemProps, undefined> {

    render() {

        return (
            <div>{this.props.Discussion.Subject}</div>
        );
    }
}