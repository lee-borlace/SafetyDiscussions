import { SafetyDiscussion } from '../../models/SafetyDiscussion';

export enum DiscussionFormMode {
    New,
    Edit,
    NA
}

export class DiscussionState {

    // Current user's discussions.
    public Discussions?: SafetyDiscussion[];

    // Is list of discussions loading currently?
    public DiscussionsFetching: boolean;

    // Was there an error fetching discussions?
    public FetchError: boolean;

    // Is a discussion in the process of being created?
    public DiscussionCreating: boolean;

    // Is single discussion loading currently?
    public DiscussionFetching: boolean;

    // Discussion being viewed / edited.
    public Discussion?: SafetyDiscussion;

    // When in the context of a single discussion, are we in view or edit mode?
    public DiscussionFormMode: DiscussionFormMode;
}