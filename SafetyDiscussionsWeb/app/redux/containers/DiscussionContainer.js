"use strict";
const react_redux_1 = require('react-redux');
const Discussion_1 = require('../../components/Discussion');
const mapStateToProps = (state) => {
    return {
        FormMode: Discussion_1.FormMode.New,
        Discussion: null
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};
exports.DiscussionContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Discussion_1.Discussion);
//# sourceMappingURL=DiscussionContainer.js.map