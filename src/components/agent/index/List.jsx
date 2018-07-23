import '../style';
import React, { PureComponent } from 'react';

import windows from '../../../images/windows.png';
import ubuntu from '../../../images/ubuntu.png';
import debian from '../../../images/debian.png';
import suse from '../../../images/suse.png';
import centos from '../../../images/centos.png';

// list
export default class List extends PureComponent {
    constructor(props) {
        super(props);
        this.popups = [];
        this.state = {
            resources: ''
        };
    }
    componentDidMount() {
        const t = this;
        document.onclick = function(e) {
            // e.stopPropagation();
            if(t.contains(t.popups, e.target)) {
                return;
            }
            t.onPopupShow(-1);
        };
    }
    componentWillUnmount() {
        document.onclick = null;
    }
    contains(containers, target) {
        let isContain = false;
        containers.forEach(o => {
            if(o.contains(target)) {
                isContain = true;
            }
        });
        return isContain;
    }
    getList(list, type) {
        if(!list) {
            return null;
        }
        if(type === 'all') {
            return list;
        }
        return list.filter(o => o.type === type);
    }
    changeResource(e) {
        this.setState({
            resources: e.target.value
        });
    }
    onPopupShow(id) {
        this.setState({
            resources: ''
        });
        this.props.onPopupShow(id);
    }
    addResource(item) {
        this.props.addResource({
            ...item,
            resources: item.resources.concat(this.state.resources.split(','))
        });
        this.onPopupShow(-1);
    }
    onDeleteItem(item, resource) {
        const index = item.resources.indexOf(resource);
        item.resources.splice(index, 1);
        this.props.addResource(item);
    }
    render() {
        const list = this.getList(this.props.list, this.props.type);
        const { openId } = this.props;
        return (
            <div className="list">
                {
                    list ?
                        list.map(o => {
                            return (
                                <div className="item" key={o.id}>
                                    <div className="img">
                                        <img src={
                                            o.os === 'debian' ?
                                                debian : o.os === 'ubuntu' ?
                                                    ubuntu : o.os === 'suse' ?
                                                        suse : o.os === 'centos' ?
                                                            centos : windows } />
                                    </div>
                                    <div className="detail">
                                        <div className="row">
                                            <span className="name"><i className="iconfont icon-xianshiqi"></i><a>{o.name}</a></span>
                                            <span className="type"><span className={o.status === 'building' ? 'orange' : 'green'}>{o.status}</span></span>
                                            <span className="ip"><i className="iconfont icon-47"></i>{o.ip}</span>
                                            <span className="location"><i className="iconfont icon-wenjianjia"></i>{o.location}</span>
                                        </div>
                                        <div className="row">
                                            <div className="row">
                                                <span ref={d => d && this.popups.push(d)} className="add">
                                                    <i onClick={() => this.onPopupShow(o.id)} className="iconfont icon-plus"></i>
                                                    <div className={openId === o.id ? 'popup show' : 'popup'}>
                                                        <p>
                                                            <span><i onClick={() => this.onPopupShow(-1)} className="iconfont icon-cha"></i></span>
                                                            <span>Seperate multiple resource name with commas</span>
                                                        </p>
                                                        <div>
                                                            <input onChange={e => this.changeResource(e)} value={this.state.resources} />
                                                        </div>
                                                        <button onClick={() => this.addResource(o)}>Add Resource</button>
                                                        <button onClick={() => this.onPopupShow(-1)}>Cancel</button>
                                                        <i className="arrow"></i>
                                                    </div>
                                                </span>
                                                {
                                                    o.resources.map(item => {
                                                        return <span key={item} className="resource">{item}<i onClick={() => this.onDeleteItem(o, item)} className="iconfont icon-shanchu"></i></span>;
                                                    })
                                                }
                                            </div>
                                            {
                                                o.status === 'building' ?
                                                    <button className="deny"><i className="iconfont icon-ai55"></i>Deny</button>:
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        }) :
                        null
                }
            </div>
        );
    }
}