/**
 * Created by saix on 2018/3/12.
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {Result, Icon, NavBar} from 'antd-mobile';

class Agreement extends Component {
    goBack = () => {
        // console.log(route);
        // route('/login', true);
        this.context.router.history.goBack();
        // this.context.router.history.push({
        //   pathname: '/',
        //   state: PageTransition.getState()
        // })
    }
    render() {
        return (
            <div className="not-found page">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={this.goBack}
                >页面未找到</NavBar>
                <Result
                    img={<Icon type="cross-circle-o" className="not-found-img" style={{ fill: '#FF5A5F' }} />}
                    title="页面未找到"
                    message={<div>点击返回<NavLink to="/">首页</NavLink>找贷款</div>}
                />
            </div>
        );
    }
}

export default Agreement;