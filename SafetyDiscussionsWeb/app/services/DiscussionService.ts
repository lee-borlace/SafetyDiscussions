import { SafetyDiscussion } from '../models/SafetyDiscussion';
import * as fetch from 'isomorphic-fetch';
import { Promise } from 'es6-promise';

export class DiscussionService {

    public SaveDiscussion(discussion: SafetyDiscussion): Promise<SafetyDiscussion> {

        return fetch(
            "discussion/creatediscussion" + window.location.search,
            {
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

    
    private ProcessServerResponse(response: IResponse): Promise<IResponse> {

        return new Promise((resolve, reject): void => {

            // Response was 200, resolve the promise.
            if (response.status === 200) {
                resolve(response.json());
            }
            // Response was not 200, there's been an error!
            else {
                reject(new Error(response.statusText));
            }
        });

    }


    private ParseCreateDiscussionResultJson = (json: any): Promise<SafetyDiscussion> => {

        return new Promise((resolve, reject): void => {

            resolve(this.ParseJsonToDiscussion(json));

        });

    }



    public GetMyDiscussions(): Promise<SafetyDiscussion[]> {

        return fetch(
            "discussion/mydiscussions" + window.location.search,
            {
                credentials: 'include',
                method: 'get'
            })
            .then(this.ProcessServerResponse) // Look at the response, confirm it's 200
            .then(this.ParseGetMyDiscussionsResultJson); // Parse out the JSON
    }


    private ParseGetMyDiscussionsResultJson = (json: any): Promise<SafetyDiscussion[]> => {

        return new Promise((resolve, reject): void => {

            let retVal: SafetyDiscussion[] = [];
            
            for (var i = 0; i < json.length; i++) {
                retVal.push(this.ParseJsonToDiscussion(json[i]));
            }

            resolve(retVal);

        });

    }


    private ParseJsonToDiscussion(json: any): SafetyDiscussion {
        return {
            Observer: json.Observer,
            DateISO: json.DateISO,
            DiscussionLocation: json.DiscussionLocation,
            DiscussedWith: json.DiscussedWith,
            Subject: json.Subject,
            Outcomes: json.Outcomes,
            Id: json.Id,
        }
    }


}
