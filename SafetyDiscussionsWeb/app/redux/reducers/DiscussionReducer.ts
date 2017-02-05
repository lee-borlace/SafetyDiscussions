import { AppState } from '../state/AppState';
import { DiscussionState, DiscussionFormMode } from '../state/DiscussionState';

import {
    OPEN_NEW_DISCUSSION_FORM,
    CREATE_DISCUSSION,
    REQUEST_CREATE_DISCUSSION,
    RECEIVE_CREATE_DISCUSSION,
    ERROR_CREATE_DISCUSSION,
    DiscussionAction
} from '../actions/DiscussionAction';

const Discussion = (
    state: DiscussionState = {
        Discussions: [],
        DiscussionsFetching: false,
        FetchError: false,
        DiscussionCreating: false,
        DiscussionFetching: false,
        Discussion: null,
        DiscussionFormMode: DiscussionFormMode.NA
    },
    action: DiscussionAction
): DiscussionState => {
    switch (action.type) {

        case CREATE_DISCUSSION:

            return {
                Discussions: [],
                DiscussionsFetching: true,
                FetchError: false,
                DiscussionCreating: false,
                DiscussionFetching: false,
                Discussion: null,
                DiscussionFormMode: DiscussionFormMode.NA
            }

        case OPEN_NEW_DISCUSSION_FORM:

            return {
                Discussions: [],
                DiscussionsFetching: true,
                FetchError: false,
                DiscussionCreating: false,
                DiscussionFetching: false,
                Discussion: null,
                DiscussionFormMode: DiscussionFormMode.New
            }

        default:
            return state
    }
};

export default Discussion;
