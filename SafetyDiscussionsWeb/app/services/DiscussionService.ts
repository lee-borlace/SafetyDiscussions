import { SafetyDiscussion } from '../models/SafetyDiscussion';
import * as fetch from 'isomorphic-fetch';
import { Promise } from 'es6-promise';

export class DiscussionService {

    public SaveDiscussion(discussion: SafetyDiscussion): Promise<SafetyDiscussion> {

        return new Promise((resolve, reject): void => {

            resolve(discussion);
            
        });            
    }

}
