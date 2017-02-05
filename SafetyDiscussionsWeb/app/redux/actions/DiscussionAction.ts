import { SafetyDiscussion } from '../../models/SafetyDiscussion';
import { Action } from './Action';

export const OPEN_NEW_DISCUSSION_FORM = 'OPEN_NEW_DISCUSSION_FORM';
export const CREATE_DISCUSSION = 'CREATE_DISCUSSION';
export const REQUEST_CREATE_DISCUSSION = 'REQUEST_CREATE_DISCUSSION';
export const RECEIVE_CREATE_DISCUSSION = 'RECEIVE_CREATE_DISCUSSION';
export const ERROR_CREATE_DISCUSSION = 'ERROR_CREATE_DISCUSSION';

export class DiscussionAction extends Action {

    // Discussion being viewed / created.
    Discussion?: SafetyDiscussion;

    // Any error message.
    ErrorMessage?: string;

}
