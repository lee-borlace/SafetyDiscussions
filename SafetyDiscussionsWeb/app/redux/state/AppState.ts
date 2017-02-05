import { SafetyDiscussion } from '../../models/SafetyDiscussion';

export class AppState {

    // Current user's discussions.
    public Discussions: SafetyDiscussion[];

    // Are discussions loading currently?
    public DiscussionsLoading: boolean;

    // Was there an error fetching discussions?
    public FetchError: boolean;
}