import React from 'react';
import { Router, Switch, Route, IndexRoute } from 'react-router';

import Frame from '../components/frame';

export default function ({ history }) {
    return (
        <Router history={ history }>
            <Switch>
                <Route path="/" component={ Frame } />
            </Switch>
        </Router>
    );
}