/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import {NavBar, Icon, WhiteSpace} from 'antd-mobile';
import ComplaintCard from './ComplaintCard';

class MyComplaint extends Component {
    goBack = () => {
        this.context.router.history.goBack();
    };
    render() {
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" size="lg"/>}
                    prefixCls='am-navbar-dark'
                    onLeftClick={(e)=>{this.goBack()}}
                >
                    我的投诉
                </NavBar>

                <ComplaintCard/>
                <WhiteSpace size="md"/>
                <ComplaintCard/>
                <WhiteSpace size="md"/>
                <ComplaintCard/>
                <WhiteSpace size="md"/>
                <ComplaintCard/>

            </div>

        )
    }
}

export default MyComplaint;