import './style';
import React, { Component } from 'react';
import userImg from '../../images/user.jpg';

// header
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page-header">
                <div className="header-content">
                    <span className="title">CRUISE</span>
                    <div className="user-info">
                        <img src={userImg} />
                        <i className="iconfont icon-xiala"></i>
                        <div className="more-box">
                            <ul>
                                <li><i className="iconfont icon-mingpian"></i>Profile</li>
                                <li><i className="iconfont icon-tuichu"></i>Sign Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}