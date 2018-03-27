import React, { Component } from 'react';
import {NavBar, Icon, WhiteSpace, Button, WingBlank, Modal, List, Grid} from 'antd-mobile';
import qs from 'query-string'
import OverView from './OverView';
import Description from './Description';
import Process from './Process';
import {Loading, Refetch} from '../Loading';
import LineCrossText from '../../component/LineCrossText/'

import {GetComplainItem} from '../../utils/APIs'

import '../../style/navbar.css'

const icons = [
    {icon : './img/icon/wechat.png'},
    {icon : './img/icon/weibo.png'},
    {icon : './img/icon/friend.png'},
    {icon : './img/icon/qq.png'},

];

//'onMenuShareTimeline',//分享给好友
// 'onMenuShareAppMessage',//分享到朋友圈
//     'onMenuShareQQ', // QQ
//     'onMenuShareWeibo', //
//     'onMenuShareQZone', //
//     'openLocation'
const wx = window.wx;
const url = window.location.href;
const onMenuShareTimeline = e => {
    wx.onMenuShareTimeline({
        title: 'from 微投诉', // 分享标题
        link: url, // 分享链接，该链接域名必须与当前企业的可信域名一致
        imgUrl: '', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    })

}


class ComplaintDetail extends Component {

    constructor(props) {
        super(props);
        //this.complaintNo = this.props.complaint.complaintNo;
        this.state = {
            complaint : null,
            shareEnable : false
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