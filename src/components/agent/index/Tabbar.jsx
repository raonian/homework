import '../style';
import React, { Component } from 'react';

// tabbar
export default class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            ip: '',
            os: '',
            type: 'physical'
        };
    }
    showPopup() {
        this.setState({
            show: !this.state.show
        });
    }
    changeValue(key, e) {
        this.setState({
            [key]: e.target.value
        });
    }
    changeType(e) {
        //
    }
    addAgent() {
        const { name, ip, os, type } = this.state;
        const resources = { name, ip, os, type};
        this.props.addItem(resources);
        this.showPopup();
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
                <button onClick={() => this.showPopup()}><i className="iconfont icon-plus">Add Agent</i></button>
                {
                    this.state.show ?
                        <div className="popup show">
                            <p>
                                <span><i onClick={() => this.showPopup()} className="iconfont icon-cha"></i></span>
                            </p>
                            <div>
                                <span>Name</span>
                                <input onChange={e => this.changeValue('name', e)} />
                            </div>
                            <div>
                                <span>Ip</span>
                                <input onChange={e => this.changeValue('ip', e)} />
                            </div>
                            <div>
                                <span>os</span>
                                <select onChange={e => this.changeValue('os', e)}>
                                    <option value="windows">windows</option>
                                    <option value="mac">mac</option>
                                    <option value="linux">linux</option>
                                </select>
                            </div>
                            <div>
                                <span>type</span>
                                <label>
                                    <input name="type" checked={this.state.type === 'physical'} type="radio" onChange={e => this.changeType(e)} />
                                    Physical
                                </label>
                                <label>
                                    <input name="type" checked={this.state.type === 'virtual'} type="radio" onChange={e => this.changeType(e)} />
                                    Virtual
                                </label>
                            </div>
                            <button onClick={() => this.addAgent()}>Add Agent</button>
                            <button onClick={() => this.showPopup()}>Cancel</button>
                            <i className="arrow"></i>
                        </div>
                        :
                        null
                }
                <div className="layout">
                    <i className="iconfont icon-caidan1"></i>
                    <i className="iconfont icon-caidan active"></i>
                </div> 
            </div>
        );
    }
}