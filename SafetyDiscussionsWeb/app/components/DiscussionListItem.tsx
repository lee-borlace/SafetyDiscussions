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
                <div className="ms-bgColor-neutralLighterAlt">
                    <div className="ms-font-l ms-fontWeight-semibold">{this.props.Discussion.Subject}</div>
                    <div className="ms-font-m">{this.GetFormattedDate(this.props.Discussion.DateISO)}</div>
                    <i className="ms-Icon ms-Icon--POI" aria-hidden="true"></i> <span className="ms-font-m">{this.props.Discussion.DiscussionLocation}</span>
                </div>
            </div>
        );
    }


    GetFormattedDate(date: Date): string {

        // TODO : Why do we need to do this?
        var date = new Date(date);

        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    }

}