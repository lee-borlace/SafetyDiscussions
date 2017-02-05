import { SafetyDiscussion } from '../models/SafetyDiscussion';
import * as fetch from 'isomorphic-fetch';
import { Promise } from 'es6-promise';

export class DiscussionService {

    public SaveDiscussion(discussion: SafetyDiscussion): Promise<number> {

        return fetch(
            "api/discussions/create",
            {
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


    private ParseJson(json: any): Promise<number> {

        return new Promise((resolve, reject): void => {

            resolve(1);

        });

    }

}
