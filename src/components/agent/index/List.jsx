import '../style';
import React, { Component } from 'react';

import windowImg from '../../../images/windows.jpg';

// list
export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list">
                <div className="item">
                    <div className="img"><img src={windowImg} /></div>
                    <div className="detail">
                        <div className="row">
                            <span className="name"><i className="iconfont icon-xianshiqi"></i><a>bjstdmngbdr08.thoughtworks.com</a></span>
                            <span className="type"><span className="orange">building</span></span>
                            <span className="ip"><i className="iconfont icon-47"></i>192.168.1.1</span>
                            <span className="location"><i className="iconfont icon-wenjianjia"></i>location</span>
                        </div>
                        <div className="row">
                            <div className="row">
                                <span className="add">
                                    <i className="iconfont icon-plus"></i>
                                    <div className="popup">
                                        <p>
                                            <span><i className="iconfont icon-cha"></i></span>
                                            <span>Seperate multiple resource name with commas</span>
                                        </p>
                                        <div>
                                            <input />
                                        </div>
                                        <button>Add Resource</button><button>Cancel</button>
                                        <i className="arrow"></i>
                                    </div>
                                </span>
                                <span className="resource">ffff<i className="iconfont icon-shanchu"></i></span>
                                <span className="resource">ffff<i className="iconfont icon-shanchu"></i></span>
                                <span className="resource">ffff<i className="iconfont icon-shanchu"></i></span>
                                <span className="resource">ffff<i className="iconfont icon-shanchu"></i></span>
                            </div>
                            <button className="deny"><i className="iconfont icon-ai55"></i>Deny</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}