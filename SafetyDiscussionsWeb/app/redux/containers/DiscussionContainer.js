"use strict";
const react_redux_1 = require('react-redux');
const DiscussionActionCreator_1 = require('../actions/DiscussionActionCreator');
const DiscussionState_1 = require('../state/DiscussionState');
const AddDiscussion_1 = require('../../components/AddDiscussion');
const mapStateToProps = (state) => {
    return {
        ShowDialog: state.Discussion.DiscussionFormMode == DiscussionState_1.DiscussionFormMode.New ? true : false
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        OnAddDiscussionClick: () => {
            DiscussionActionCreator_1.DiscussionActionCreator.CreateActionOpenNewDiscussionForm();
        }
    };
};
// Redux container component for a single discussion.
exports.DiscussionContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AddDiscussion_1.AddDiscussion);
//# sourceMappingURL=DiscussionContainer.js.map