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

                    </div>
                    <WhiteSpace size="md"/>
                    <div class="about-us-info" >

                    </div>
                    <WhiteSpace size="md"/>
                    <div class="about-us-info" >

                    </div>
                </div>

            </div>
        )
    }


}

export  default  AboutUs;