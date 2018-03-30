import React, { Component } from 'react';
import {NavBar, Icon, WhiteSpace, Button, WingBlank, Modal, List, Grid} from 'antd-mobile';
import qs from 'query-string'
import OverView from './OverView';
import Description from './Description';
import Process from './Process';
import {Loading, Refetch} from '../Loading';
import LineCrossText from '../../component/LineCrossText/'

import {GetComplainItem} from '../../utils/APIs'

import {ShareQQ, ShareTimeline, ShareAppMessage, ShareWeibo, ShareQZone, ShareUrl, RegisterShareData, UnregisterShareData} from "../../utils/WXShare";

import '../../style/navbar.css'

const icons = [
    {icon : './img/icon/wechat.png', index:0},
    {icon : './img/icon/weibo.png', index:1},
    {icon : './img/icon/friend.png', index:2},
    {icon : './img/icon/qq.png', index:3},

];



class ComplaintDetail extends Component {

    constructor(props) {
        super(props);
        //this.complaintNo = this.props.complaint.complaintNo;
        this.state = {
            complaint : null,
            shareEnable : false
        }
        this.shareData = {}


    }
    componentWillUnmount () {
        UnregisterShareData()
    }
    componentDidMount() {
        const {location={}} = this.props
        const {search=''} = location
        const queryObj = qs.parse(search)
        this.complaintNo = queryObj['complaintNo'] || ''
        GetComplainItem(this.complaintNo)
            .then(res=>{

                const shareData = {
                    title: '微投诉',
                    desc: '微投诉投诉单分享',
                    link: ShareUrl("#/complaint-detail?complaintNo=" + res.complainNo),
                    imgUrl: "https://weitousuh5.taixintech.com/wetousuPhoto/7f5450cb-c609-4224-aeb8-517e37a225a0."
                }

                window.wx.onMenuShareAppMessage(shareData);
                window.wx.onMenuShareTimeline(shareData);
                window.wx.onMenuShareQQ(shareData);
                window.wx.onMenuShareWeibo(shareData);

                this.setState({
                    complaint : res
                });
            });


    }


    goBack = () => {
        this.context.router.history.goBack();
    };

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    shareComplaint(e) {
        // window.wx.openLocation({
        //     latitude: 23.099994,
        //     longitude: 113.324520,
        //     name: 'TIT 创意园',
        //     address: '广州市海珠区新港中路 397 号',
        //     scale: 14,
        //     infoUrl: 'http://weixin.qq.com'
        // });
        e.preventDefault();
        this.setState({
            shareEnable: true,
        });


    }

    _shareComplaint(index) {
        const url = ShareUrl("complaint-detail?complaintNo=" + this.complaintNo)
        alert(url)
        switch (index){
            case 1: //weibo
                window.wx.showMenuItems(["menuItem:share:appMessage"])
                break;
            case 2: //friend
                window.wx.showMenuItems(["menuItem:share:timeline"])
                break;
            case 3: // QQ
                window.wx.showMenuItems(["menuItem:share:qq"])
                break;
            case 0://wechat
                window.wx.showMenuItems(["menuItem:share:QZone"])
            default:
                break;
        }
    }



    renderShareModel() {
        return (
            <Modal
                popup
                visible={this.state.shareEnable}
                onClose={this.onClose("shareEnable")}
                animationType="slide-up"
            >
                <WhiteSpace/>
                <LineCrossText childStyle={{backgroundColor:'#FFF'}}>分享到</LineCrossText>
                <WhiteSpace/>

                <Grid data={icons}
                      hasLine={false}
                      activeStyle={false}
                      renderItem={dataItem => (
                          <div>
                              <img src={dataItem.icon} style={{ width: '64px', height: '64px' }} alt=""
                                   onClick={(e)=>{
                                       console.log(dataItem.icon)
                                       this._shareComplaint(dataItem.index)
                                   }}/>
                          </div>
                      )}
                />
            </Modal>
        )
    }

    renderFoot() {
        if (this.state.complaint.unionId === window.localStorage.unionId) {
            return (
                <div class='footer'>
                    <WingBlank size="lg"/>
                    <Button
                        icon={<img src="./img/icon/share.png" alt=""/>}
                        className="btn"
                        type="primary"
                        onClick={this.shareComplaint.bind(this)}
                    ><span style={{fontSize:'16px'}}> 一键转发, 提升曝光率, 维权更容易</span></Button>

                </div>
            )
        }
        else {
            return (
                <div class='footer'>
                    <WingBlank size="lg"/>
                    <Button
                        icon={<img src="./img/icon/share.png" alt=""/>}
                        className="btn"
                        type="primary"
                        onClick={this.showModal("shareEnable")}
                    ><span style={{fontSize:'16px'}}>我也要投诉</span></Button>

                </div>
            )
        }
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

                {this.renderFoot()}
                {this.renderShareModel()}

            </div>

        )
    }
}

export  default ComplaintDetail;