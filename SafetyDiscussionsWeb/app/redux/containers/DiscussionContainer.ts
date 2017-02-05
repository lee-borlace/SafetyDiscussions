import { connect } from 'react-redux';

import { DiscussionAction } from '../actions/DiscussionAction';
import { DiscussionActionCreator } from '../actions/DiscussionActionCreator';
import { AppState } from '../state/AppState';

import { DiscussionState, DiscussionFormMode } from '../state/DiscussionState';
import { AddDiscussion, IAddDiscussionProps } from '../../components/AddDiscussion';

const mapStateToProps = (state: AppState): IAddDiscussionProps => {
   
    return {
        ShowDialog: state.Discussion.DiscussionFormMode == DiscussionFormMode.New ? true : false,
        Discussion: null
    }
}

const mapDispatchToProps = (
    dispatch: (action: DiscussionAction) => void,
    ownProps: IAddDiscussionProps): IAddDiscussionProps => {
    return {
        OnAddDiscussionClick: (): void => {
            dispatch(DiscussionActionCreator.CreateActionOpenNewDiscussionForm());     
        },
        OnSaveDiscussionClick: (): void => {
            dispatch(DiscussionActionCreator.CreateActionCreateDiscussion(ownProps.Discussion));
            console.log(ownProps.Discussion.DiscussionLocation);
        }
    };
}

// Redux container component for a single discussion.
export const DiscussionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDiscussion);