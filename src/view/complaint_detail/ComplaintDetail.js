import React, { Component } from 'react';
import {NavBar, Icon, WhiteSpace, Button, WingBlank} from 'antd-mobile';
import OverView from './OverView';
import Description from './Description';
import Process from './Process';
import '../../style/navbar.css'

class ComplaintDetail extends Component {

    goBack = () => {
        this.context.router.history.goBack();
    };



    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" size="lg"/>}
                    prefixCls='am-navbar-dark'
                    onLeftClick={(e)=>{this.goBack()}}
                >
                    投诉详情
                </NavBar>
                <OverView/>
                <WhiteSpace size="md"/>
                <Description/>
                <WhiteSpace size="md"/>
                <Process/>
                <WhiteSpace size="md"/>

                <div class='footer'>
                    <WingBlank size="lg"/>
                    <Button
                        icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt=""/>}
                        className="btn"
                        type="primary"
                    ><span style={{fontSize:'16px'}}> 一键转发, 提升曝光率, 维权更容易</span></Button>

                </div>

            </div>

        )
    }
}

export  default ComplaintDetail;