/**
 * Created by saix on 2018/3/16.
 */
import React, { Component } from 'react';
import {NavBar, Icon} from 'antd-mobile';

import './MyNavBar.css';

class MyNavBar extends Component {

    constructor(props){
        super(props);
    }

    goBack = () => {
        this.context.router.history.goBack();
    };

    render() {

        return (
            <div class="my-navbar">
                <NavBar
                    mode="dark"
                    icon={this.props.hiddenBack?null:<Icon type="left" size="lg"/>}
                    prefixCls='am-navbar-dark'
                    onLeftClick={(e)=>{
                        this.props.goBack?this.props.goBack() : this.goBack()
                    }}
                >
                    {this.props.title || "微投诉"}
                </NavBar>
            </div>
        )
    }


}

export default MyNavBar;


