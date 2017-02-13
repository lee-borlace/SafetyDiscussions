"use strict";
const React = require("react");
const MyDiscussions_1 = require("./MyDiscussions");
const AddDiscussion_1 = require("./AddDiscussion");
const Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
const MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
const DiscussionService_1 = require("../services/DiscussionService");
class SafetyDiscussions extends React.Component {
    constructor() {
        super();
        this.state = {
            MyDiscussions: [],
            IsLoading: false,
            IsError: false
        };
    }
    componentDidMount() {
        this.LoadDiscussions();
    }
    // Main renderer.
    render() {
        return (React.createElement("div", { className: "ms-Grid" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg4" },
                    this.state.IsError &&
                        React.createElement("div", null,
                            React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error }, "Sorry, there was a problem loading your data. Please refresh the page and try again."),
                            React.createElement("br", null)),
                    this.state.IsLoading &&
                        React.createElement(Spinner_1.Spinner, { label: 'Loading discussions...' }),
                    !this.state.IsLoading && !this.state.IsError &&
                        React.createElement("div", null,
                            React.createElement(AddDiscussion_1.AddDiscussion, { NewDiscussionCreated: this.NewDiscussionCreated.bind(this) }),
                            React.createElement(MyDiscussions_1.MyDiscussions, { MyDiscussions: this.state.MyDiscussions }))))));
    }
    // New discussion has been created. Re-load discussions.
    NewDiscussionCreated(discussion) {
        console.log("SafetyDiscussions.newDiscussionCreated()");
        // Re-load discussions.
        this.LoadDiscussions();
    }
    LoadDiscussions() {
        // Load existing discussions.
        this.setState({ IsLoading: true });
        let service = new DiscussionService_1.DiscussionService();
        service
            .GetMyDiscussions()
            .then((discussions) => {
            this.setState({
                IsError: false,
                IsLoading: false,
                MyDiscussions: discussions
            });
        })
            .catch((error) => {
            console.log(error);
            this.setState({
                IsError: true,
                IsLoading: false
            });
        });
    }
}
exports.SafetyDiscussions = SafetyDiscussions;
//# sourceMappingURL=SafetyDiscussions.js.map