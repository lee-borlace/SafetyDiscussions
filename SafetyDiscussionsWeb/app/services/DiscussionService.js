"use strict";
const fetch = require('isomorphic-fetch');
const es6_promise_1 = require('es6-promise');
class DiscussionService {
    constructor() {
        this.ParseCreateDiscussionResultJson = (json) => {
            return new es6_promise_1.Promise((resolve, reject) => {
                resolve(this.ParseJsonToDiscussion(json));
            });
        };
        this.ParseGetMyDiscussionsResultJson = (json) => {
            return new es6_promise_1.Promise((resolve, reject) => {
                let retVal = [];
                for (var i = 0; i < json.length; i++) {
                    retVal.push(this.ParseJsonToDiscussion(json[i]));
                }
                resolve(retVal);
            });
        };
    }
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
            .then(this.ParseCreateDiscussionResultJson); // Parse out the JSON
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
    GetMyDiscussions() {
        return fetch("discussion/mydiscussions" + window.location.search, {
            credentials: 'include',
            method: 'get'
        })
            .then(this.ProcessServerResponse) // Look at the response, confirm it's 200
            .then(this.ParseGetMyDiscussionsResultJson); // Parse out the JSON
    }
    ParseJsonToDiscussion(json) {
        return {
            Observer: json.Observer,
            DateISO: json.DateISO,
            DiscussionLocation: json.DiscussionLocation,
            DiscussedWith: json.DiscussedWith,
            Subject: json.Subject,
            Outcomes: json.Outcomes,
            Id: json.Id,
        };
    }
}
exports.DiscussionService = DiscussionService;
//# sourceMappingURL=DiscussionService.js.map