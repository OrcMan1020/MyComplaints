import React, { Component } from 'react';
import {NavBar, Icon, WhiteSpace, Button, WingBlank} from 'antd-mobile';
import qs from 'query-string'
import OverView from './OverView';
import Description from './Description';
import Process from './Process';
import {Loading, Refetch} from '../Loading';

import {GetComplainItem} from '../../utils/APIs'

import '../../style/navbar.css'




class ComplaintDetail extends Component {

    constructor(props) {
        super(props);
        //this.complaintNo = this.props.complaint.complaintNo;
        this.state = {
            complaint : null
        }

    }

    componentDidMount() {
        const {location={}} = this.props
        const {search=''} = location
        const queryObj = qs.parse(search)
        this.complaintNo = queryObj['complaintNo'] || ''
        GetComplainItem(this.complaintNo)
            .then(res=>{
                this.setState({
                    complaint : res
                });
            });


    }


    goBack = () => {
        this.context.router.history.goBack();
    };

    shareComplaint() {
        window.wx.openLocation({
            latitude: 23.099994,
            longitude: 113.324520,
            name: 'TIT 创意园',
            address: '广州市海珠区新港中路 397 号',
            scale: 14,
            infoUrl: 'http://weixin.qq.com'
        });
    }

    render() {

        if (!this.state.complaint){
            return (
                <Loading/>
            );
        }

        return (
            <div class="complaint-detail">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" size="lg"/>}
                    prefixCls='am-navbar-dark'
                    onLeftClick={(e)=>{this.goBack()}}
                >
                    投诉详情
                </NavBar>
                <div class="complaint-overview">
                <OverView complaint={this.state.complaint}/>
                </div>
                <WhiteSpace size="md"/>
                <Description complaint={this.state.complaint}/>
                <WhiteSpace size="md"/>
                <Process complaint={this.state.complaint}/>
                <WhiteSpace size="md"/>

                <div class='footer'>
                    <WingBlank size="lg"/>
                    <Button
                        icon={<img src="./img/icon/share.png" alt=""/>}
                        className="btn"
                        type="primary"
                        onClick={this.shareComplaint}
                    ><span style={{fontSize:'16px'}}> 一键转发, 提升曝光率, 维权更容易</span></Button>

                </div>

            </div>

        )
    }
}

export  default ComplaintDetail;