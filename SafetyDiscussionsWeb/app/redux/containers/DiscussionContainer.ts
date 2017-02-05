import { connect } from 'react-redux';

import { DiscussionAction } from '../actions/DiscussionAction';
import { DiscussionActionCreator } from '../actions/DiscussionActionCreator';
import { AppState } from '../state/AppState';

import { DiscussionState, DiscussionFormMode } from '../state/DiscussionState';
import { Discussion, IDiscussionProps, FormMode } from '../../components/Discussion';

const mapStateToProps = (state: AppState): IDiscussionProps => {
   
    return {
        FormMode: FormMode.New,
        Discussion: null
    };
}

const mapDispatchToProps = (
    dispatch: (action: any) => void,
    ownProps: any) => {
    return {};
}

export const DiscussionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Discussion);