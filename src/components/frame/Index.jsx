import './style';
import React, { Component } from 'react';
import { Router, Switch, Route, IndexRoute } from 'react-router';
import Nav from '../nav';
import Header from '../header';

import Agent from '../agent';

// frame
export default class Frame extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="frame">
                <Header {...this.props}/>
                <div className="wrap">
                    <Nav {...this.props}/>
                    <div className="container">
                        <Router {...this.props}>
                            <Switch>
                                <Route path="/agent" component={ Agent } />
                                <Route path="/" component={ Agent } />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}