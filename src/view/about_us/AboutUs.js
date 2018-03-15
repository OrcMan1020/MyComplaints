/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';

import {NavBar, Icon, WhiteSpace, Card} from 'antd-mobile';
import './AboutUs.css';

class AboutUs extends Component {
    goBack = () => {
        this.context.router.history.goBack();
    };

    render() {
        return (
            <div class='about-us'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" size="lg"/>}
                    prefixCls='am-navbar-dark'
                    onLeftClick={(e)=>{this.goBack()}}
                >
                    关于我们
                </NavBar>
                <WhiteSpace size="sm"/>
                <Card>
                    <Card.Body>
                        <div class='about-us-title'>
                            <b>微投诉</b>
                        </div>
                        <WhiteSpace size="lg"/>
                        <div class='about-us-body'>
                        <p>
                            这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍这是关于我们的介绍
                            </p>
                        </div>
                    </Card.Body>
                </Card>

                {/*<WhiteSpace size="lg"/>*/}
                <div style={{padding:'32px'}}>
                    <div class="about-us-info" >
                        <div class="about-us-info-content">
                            <img src="./img/phone-icon.png"/>
                            <span>热线: 010-12345678</span><span style={{fontSize:'14px', color:'#202020'}}>(常规上班时间接听)</span>
                        </div>
                    </div>
                    <WhiteSpace size="md"/>
                    <div class="about-us-info" >
                        <div class="about-us-info-content">
                            <img src="./img/mail-icon.png"/>
                            <span>jts@sina.com</span><span style={{fontSize:'14px', color:'#202020'}}>(供投诉人使用)</span>
                        </div>
                    </div>
                    <WhiteSpace size="md"/>
                    <div class="about-us-info" >
                        <div class="about-us-info-content">
                            <img src="./img/mail-icon.png"/>
                            <span>jtsord@sina.com</span><span style={{fontSize:'14px', color:'#202020'}}>(供被投诉方或媒体使用)</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}

export  default  AboutUs;