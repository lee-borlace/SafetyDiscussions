"use strict";
const es6_promise_1 = require('es6-promise');
class DiscussionService {
    SaveDiscussion(discussion) {
        return new es6_promise_1.Promise((resolve, reject) => {
            resolve(discussion);
        });
    }
}
exports.DiscussionService = DiscussionService;
//# sourceMappingURL=DiscussionService.js.map