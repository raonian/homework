import './style';
import React, { Component } from 'react';

// nav
export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav">
                <ul className="nav-list">
                    <li><i className="iconfont icon-yibiaopan"></i>DASHBOARD</li>
                    <li className="active"><i className="iconfont icon-zuzhi"></i>AGENT</li>
                    <li><i className="iconfont icon-home"></i>MYCRUISE</li>
                    <li><i className="iconfont icon-help"></i>HELP</li>
                </ul>

                <div className="history">
                    <h5>History</h5>
                    <ul>
                        <li><a href="http://bjstdmngbdr08.thoughtworks.com">bjstdmngbdr08.thoughtworks.com</a></li>
                        <li><a href="http://bjstdmngbdr08.thoughtworks.com">bjstdmngbdr08.thoughtworks.com</a></li>
                        <li><a href="http://bjstdmngbdr08.thoughtworks.com">bjstdmngbdr08.thoughtworks.com</a></li>
                        <li><a href="http://bjstdmngbdr08.thoughtworks.com">bjstdmngbdr08.thoughtworks.com</a></li>
                        <li><a href="http://bjstdmngbdr08.thoughtworks.com">bjstdmngbdr08.thoughtworks.com</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}