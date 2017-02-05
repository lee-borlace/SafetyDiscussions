"use strict";
const DiscussionAction_1 = require('./DiscussionAction');
class DiscussionActionCreator {
    static CreateActionCreateDiscussion(newDiscussion) {
        return {
            type: DiscussionAction_1.CREATE_DISCUSSION,
            Discussion: newDiscussion
        };
    }
}
exports.DiscussionActionCreator = DiscussionActionCreator;
//# sourceMappingURL=DiscussionActionCreator.js.map