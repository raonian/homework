import '../style';
import React, { Component } from 'react';

// card
export default class Cards extends Component {
    constructor(props) {
        super(props);
    }
    getNums(list) {
        const nums = {
            buildingNum: 0,
            idleNum: 0,
            allNum: 0,
            physicalNum: 0,
            virtualNum: 0
        };
        if(list) {
            list.forEach(o => {
                if(o.status === 'building') {
                    nums.buildingNum++;
                }
                if(o.status === 'idle') {
                    nums.idleNum++;
                }
                if(o.type === 'physical') {
                    nums.physicalNum++;
                }
                if(o.type === 'virtual') {
                    nums.virtualNum++;
                }
            }) ;
        }
        nums.allNum = nums.physicalNum + nums.virtualNum;
        return nums;
    }
    render() {
        const { buildingNum, idleNum, allNum, physicalNum, virtualNum } = this.getNums(this.props.list);
        return (
            <div className="card">
                <div className="card-item">
                    <span className="title">Building</span>
                    <i className="iconfont icon-setting"></i>
                    <span className="number">3</span>
                </div>
                <div className="card-item">
                    <span className="title">Idle</span>
                    <i className="iconfont icon-cup"></i>
                    <span className="number">5</span>
                </div>
                <div className="card-item">
                    <div className="left">
                        <div>ALL</div>
                        <div>PHYSICAL</div>
                        <div>VIRTUAL</div>
                    </div>
                    <div className="right">
                        <div>8</div>
                        <div>4</div>
                        <div>4</div>
                    </div>
                </div>
            </div>
        );
    }
}