import './style';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import Card from './index/Card';
import Tabbar from './index/Tabbar';
import List from './index/List';

// agent
class Agent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'rn'
        };
    }
    componentDidMount() {
        this.props.fetchData(1);
    }
    render() {
        return (
            <div className="agent-page">
                <Card />
                <Tabbar />
                <List />
            </div>
        );
    }
}

export default connect(
    state => ({ list: state.list}),
    dispath => ({
        fetchData: id => dispath({ type: 'FETCH_DATA' , id })
    })
)(Agent);

