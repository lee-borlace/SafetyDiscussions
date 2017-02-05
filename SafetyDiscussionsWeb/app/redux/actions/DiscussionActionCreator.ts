import { Promise } from 'es6-promise';

import { SafetyDiscussion } from '../../models/SafetyDiscussion';
import { Action } from './Action';

import {
    CREATE_DISCUSSION,
    REQUEST_CREATE_DISCUSSION,
    RECEIVE_CREATE_DISCUSSION,
    ERROR_CREATE_DISCUSSION,
    DiscussionAction
} from './DiscussionAction';


export class DiscussionActionCreator {


    public static CreateActionCreateDiscussion(newDiscussion: SafetyDiscussion): DiscussionAction {
        return {
            type: CREATE_DISCUSSION,
            Discussion: newDiscussion
        }
    }
   

}