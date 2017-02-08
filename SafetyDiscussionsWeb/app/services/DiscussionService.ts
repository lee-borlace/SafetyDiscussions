import { SafetyDiscussion } from '../models/SafetyDiscussion';
import * as fetch from 'isomorphic-fetch';
import { Promise } from 'es6-promise';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { people } from './FakeUsers';
import { IPersonaWithMenu } from 'office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePickerItems/PeoplePickerItem.Props';


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
            DateISO: json.DateISO,
            DiscussionLocation: json.DiscussionLocation,
            DiscussedWith: json.DiscussedWith,
            Subject: json.Subject,
            Outcomes: json.Outcomes,
            Id: json.Id,
        }
    }

    // TODO : PoC only. In a real app this would do a HTTP call into SP. This code and the code it calls all comes from the Fabric React source code.
    public UserSearch(text: string, currentPersonas: IPersonaProps[], limitResults?: number): Promise<IPersonaProps> {

        var peopleList = this.GetPeopleList();
        let filteredPersonas: IPersonaProps[] = this.FilterPersonasByText(peopleList, text);
        filteredPersonas = this.RemoveDuplicates(filteredPersonas, currentPersonas);
        filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;

        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(filteredPersonas), 500));
    }

    private RemoveDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
        return personas.filter(persona => !this.ListContainsPersona(persona, possibleDupes));
    }

    private ListContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(item => item.primaryText === persona.primaryText).length > 0;
    }

    private FilterPersonasByText(peopleList: any[], filterText: string): IPersonaProps[] {
        return peopleList.filter(item => this.DoesTextStartWith(item.primaryText, filterText));
    }

    private DoesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    private GetPeopleList(): any[] {

        var peopleList: any[] = [];

        let contextualMenuItems: IContextualMenuItem[] = [
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

        people.forEach((persona: IPersonaProps) => {
            let target: IPersonaWithMenu = {};

            Object.assign(target, persona, { menuItems: contextualMenuItems });
            peopleList.push(target);
        });

        return peopleList;

    }



}
