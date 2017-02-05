import { connect } from 'react-redux';

import { DiscussionAction } from '../actions/DiscussionAction';
import { AppState } from '../state/AppState';
import { DiscussionState, DiscussionFormMode } from '../state/DiscussionState';

import { Discussion, FormMode, IDiscussionProps } from '../../components/Discussion';


const mapStateToProps = (state: AppState): IDiscussionProps => {

    let formMode: FormMode = FormMode.New;

    switch (state.Discussion.DiscussionFormMode) {

        case DiscussionFormMode.Edit:
            formMode = FormMode.Edit;
        case DiscussionFormMode.New:
            formMode = FormMode.New;
        default:
            formMode = FormMode.New;
    }

    return {
        FormMode: formMode,
        Discussion: state.Discussion.Discussion
    }
}

const mapDispatchToProps = (
    dispatch: (action: DiscussionAction) => void,
    ownProps: any) => {
    return {};
}

// Redux container component for a single discussion.
export const DiscussionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Discussion);