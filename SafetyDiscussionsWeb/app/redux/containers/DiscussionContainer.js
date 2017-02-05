"use strict";
const react_redux_1 = require('react-redux');
const DiscussionState_1 = require('../state/DiscussionState');
const Discussion_1 = require('../../components/Discussion');
const mapStateToProps = (state) => {
    let formMode = Discussion_1.FormMode.New;
    switch (state.Discussion.DiscussionFormMode) {
        case DiscussionState_1.DiscussionFormMode.Edit:
            formMode = Discussion_1.FormMode.Edit;
        case DiscussionState_1.DiscussionFormMode.New:
            formMode = Discussion_1.FormMode.New;
        default:
            formMode = Discussion_1.FormMode.New;
    }
    return {
        FormMode: formMode,
        Discussion: state.Discussion.Discussion
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};
// Redux container component for a single discussion.
exports.DiscussionContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Discussion_1.Discussion);
//# sourceMappingURL=DiscussionContainer.js.map