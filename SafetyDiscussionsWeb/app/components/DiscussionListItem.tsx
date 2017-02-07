import * as React from "react";
import * as ReactDOM from 'react-dom';

import { SafetyDiscussion } from '../models/SafetyDiscussion';

export interface IDiscussionListItemProps {
    Discussion: SafetyDiscussion;
}


export class DiscussionListItem extends React.Component<IDiscussionListItemProps, undefined> {

    render() {

        return (
            <div className="sd-discussion">
                <div className="ms-font-l">{this.props.Discussion.Subject}</div>
                <div className="ms-font-m">{this.GetFormattedDate(this.props.Discussion.DateISO)}</div>
                <div className="ms-font-m">{this.props.Discussion.DiscussionLocation}</div>
            </div>
        );
    }


    GetFormattedDate(date: Date): string {

        // TODO : Why do we need to do this?
        var date = new Date(date);

        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    }

}