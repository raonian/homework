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
            type: 'all',
            openId: -1
        };
        this.changeType = this.changeType.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.addResource = this.addResource.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    componentDidMount() {
        this.props.fetchData();
    }
    changeType(type) {
        this.setState({
            type
        });
    }
    showPopup(id) {
        this.setState({
            openId: id
        });
    }
    addResource(data) {
        this.props.putData(data);
    }
    addItem(data) {
        this.props.putItem({ status: 'idle', location: 'var/lib/cruise-agent', resources: [], ...data});
    }
    render() {
        const { type, openId } = this.state;
        return (
            <div className="agent-page">
                <Card {...this.props}/>
                <Tabbar {...this.props} addItem={this.addItem} onChange={this.changeType} type={type} />
                <List {...this.props} addResource={this.addResource} onPopupShow={this.showPopup} type={type} openId={openId} />
            </div>
        );
    }
}

export default connect(
    state => ({ list: state.list}),
    dispath => ({
        fetchData: () => dispath({ type: 'FETCH_DATA' }),
        putData: (data) => dispath({ type: 'PUT_DATA', data }),
        putItem: (data) => dispath({ type: 'PUT_ITEM', data })
    })
)(Agent);

