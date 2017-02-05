"use strict";
const DiscussionState_1 = require('../state/DiscussionState');
const DiscussionAction_1 = require('../actions/DiscussionAction');
const Discussion = (state = {
        Discussions: [],
        DiscussionsFetching: false,
        FetchError: false,
        DiscussionCreating: false,
        DiscussionFetching: false,
        Discussion: null,
        DiscussionFormMode: DiscussionState_1.DiscussionFormMode.NA
    }, action) => {
    switch (action.type) {
        case DiscussionAction_1.CREATE_DISCUSSION:
            return {
                Discussions: [],
                DiscussionsFetching: true,
                FetchError: false,
                DiscussionCreating: false,
                DiscussionFetching: false,
                Discussion: null,
                DiscussionFormMode: DiscussionState_1.DiscussionFormMode.NA
            };
        default:
            return state;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Discussion;
//# sourceMappingURL=DiscussionReducer.js.map