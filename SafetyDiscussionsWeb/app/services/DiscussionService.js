"use strict";
const fetch = require('isomorphic-fetch');
const es6_promise_1 = require('es6-promise');
class DiscussionService {
    SaveDiscussion(discussion) {
        return fetch("discussion/creatediscussion" + window.location.search, {
            credentials: 'include',
            method: 'put',
            body: JSON.stringify(discussion),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(this.ProcessServerResponse) // Look at the response, confirm it's 200
            .then(this.ParseJson); // Parse out the JSON
    }
    ProcessServerResponse(response) {
        return new es6_promise_1.Promise((resolve, reject) => {
            // Response was 200, resolve the promise.
            if (response.status === 200) {
                resolve(response.json());
            }
            else {
                reject(new Error(response.statusText));
            }
        });
    }
    ParseJson(json) {
        return new es6_promise_1.Promise((resolve, reject) => {
            resolve(1);
        });
    }
}
exports.DiscussionService = DiscussionService;
//# sourceMappingURL=DiscussionService.js.map