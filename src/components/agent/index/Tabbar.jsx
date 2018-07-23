import '../style';
import React, { Component } from 'react';

// tabbar
export default class Tabbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, onChange } = this.props;
        return (
            <div className="tabbar">
                <div className="tabs">
                    <div onClick={() => onChange('all')} className={type === 'all' ? 'tab-item active' : 'tab-item'}>All</div>
                    <div onClick={() => onChange('physical')} className={type === 'physical' ? 'tab-item active' : 'tab-item'}>PHYSICAL</div>
                    <div onClick={() => onChange('virtual')} className={type === 'virtual' ? 'tab-item active' : 'tab-item'}>VIRTUAL</div>
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