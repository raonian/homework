import '../style';
import React, { Component } from 'react';

// tabbar
export default class Tabbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tabbar">
                <div className="tabs">
                    <div className="tab-item active">All</div>
                    <div className="tab-item">PHYSICAL</div>
                    <div className="tab-item">VIRTUAL</div>
                </div>
                <div className="search-box">
                    <input /><i className="iconfont icon-search"></i>
                </div>
                <div className="layout">
                    <i className="iconfont icon-caidan1"></i>
                    <i className="iconfont icon-caidan active"></i>
                </div>
            </div>
        );
    }
}