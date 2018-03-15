/**
 * Created by saix on 2018/3/12.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import {TabBar, Carousel, Icon, SearchBar, Tabs, WhiteSpace, WingBlank} from 'antd-mobile';
import { List } from 'antd-mobile';
import FetchDataPlaceholder from '../component/FetchDataPlaceholder/'
import Home from './home/Home'
import AddComplaint from './add_complaint/AddComplaint';
import Mine from './mine/Mine';

import '../style/navbar.css'

import { NavBar} from 'antd-mobile';


const tabs = [
    { title: "最热投诉" },
    { title: "最新投诉" },
    { title: "已回复" },
    { title: "已完成" },
];

const titles = {
    'home' : '微投诉',
    'complaint' : '添加投诉',
    'mine' : '微投诉'
};



class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: window.selectedTab || 'mine',
            hidden: false,
            fullScreen: false,
            navBarTitle : ''
        };
    }



    componentDidMount() {

    }

    goBack = () => {
        // route('/login', true);
        // this.context.router.history.goBack();
        // this.context.router.history.push({
        //   pathname: '/',
        //   search: '?tab=user',
        //   state: PageTransition.getState()
        // })
    }

    goToTab = (selectedTab) => {
        window.selectedTab = selectedTab;
        this.setState({
                selectedTab : selectedTab
        }
        );
    }

    renderBackArrow(display) {
        if (!display) {
            return null;
        }
        else {
            return (<Icon type="left" size="lg"/>)

        }
    }

    renderNavBarTitle(title) {
        return (<div>title</div>)
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={this.renderBackArrow(false)}
                    prefixCls='am-navbar-dark'
                    onLeftClick={(e)=>{this.goBack()}}
                >
                    {titles[this.state.selectedTab]}
                </NavBar>
                <div class="app page">
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="首页"
                            key="Home"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selected={this.state.selectedTab === 'home'}
                            onPress={() => {
                                this.goToTab('home')
                            }}
                            data-seed="logId"
                        >
                            <Home></Home>
                        </TabBar.Item>


                        <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="投诉"
                        key="complaint"
                        selected={this.state.selectedTab === 'complaint'}
                        onPress={() => {
                            this.goToTab('complaint')
                        }}
                        data-seed="logId1"
                    >
                        <AddComplaint goToTab={this.goToTab.bind(this)}></AddComplaint>
                    </TabBar.Item>


                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            title="我的"
                            key="mine"
                            selected={this.state.selectedTab === 'mine'}
                            onPress={() => {
                                this.goToTab('mine')
                            }}
                            data-seed="logId1"
                        >
                            <Mine></Mine>
                        </TabBar.Item>

                    </TabBar>
                </div>






            </div>
        )
    }
}

export default MainLayout;

