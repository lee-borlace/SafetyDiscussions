import { AppState } from '../state/AppState';
import { DiscussionState, DiscussionFormMode } from '../state/DiscussionState';

import {
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

        default:
            return state
    }
};

export default Discussion;
