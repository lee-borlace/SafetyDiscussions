import * as React from "react";
import * as ReactDOM from 'react-dom';

import { SafetyDiscussions } from './components/SafetyDiscussions';

// Polyfill Promise.
import { polyfill } from 'es6-promise';
polyfill();

ReactDOM.render(
    <SafetyDiscussions />,
    document.getElementById('reactRoot')
);

