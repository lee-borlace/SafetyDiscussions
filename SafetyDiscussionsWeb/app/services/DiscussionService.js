"use strict";
const fetch = require('isomorphic-fetch');
const es6_promise_1 = require('es6-promise');
const FakeUsers_1 = require('./FakeUsers');
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
            DateISO: json.DateISO,
            DiscussionLocation: json.DiscussionLocation,
            DiscussedWith: json.DiscussedWith,
            Subject: json.Subject,
            Outcomes: json.Outcomes,
            Id: json.Id,
        };
    }
    // TODO : PoC only. In a real app this would do a HTTP call into SP. This code and the code it calls all comes from the Fabric React source code.
    UserSearch(text, currentPersonas, limitResults) {
        var peopleList = this.GetPeopleList();
        let filteredPersonas = this.FilterPersonasByText(peopleList, text);
        filteredPersonas = this.RemoveDuplicates(filteredPersonas, currentPersonas);
        filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
        return new es6_promise_1.Promise((resolve, reject) => setTimeout(() => resolve(filteredPersonas), 2000));
    }
    RemoveDuplicates(personas, possibleDupes) {
        return personas.filter(persona => !this.ListContainsPersona(persona, possibleDupes));
    }
    ListContainsPersona(persona, personas) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(item => item.primaryText === persona.primaryText).length > 0;
    }
    FilterPersonasByText(peopleList, filterText) {
        return peopleList.filter(item => this.DoesTextStartWith(item.primaryText, filterText));
    }
    DoesTextStartWith(text, filterText) {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }
    GetPeopleList() {
        var peopleList = [];
        let contextualMenuItems = [
            {
                key: 'newItem',
                icon: 'circlePlus',
                name: 'New'
            },
            {
                key: 'upload',
                icon: 'upload',
                name: 'Upload'
            },
            {
                key: 'divider_1',
                name: '-',
            },
            {
                key: 'rename',
                name: 'Rename'
            },
            {
                key: 'properties',
                name: 'Properties'
            },
            {
                key: 'disabled',
                name: 'Disabled item',
                disabled: true
            }
        ];
        FakeUsers_1.people.forEach((persona) => {
            let target = {};
            Object.assign(target, persona, { menuItems: contextualMenuItems });
            peopleList.push(target);
        });
        return peopleList;
    }
}
exports.DiscussionService = DiscussionService;
//# sourceMappingURL=DiscussionService.js.map