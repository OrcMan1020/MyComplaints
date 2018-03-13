/**
 * Created by saix on 2018/3/12.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import {TabBar, Carousel, Icon, SearchBar, Tabs, WhiteSpace, WingBlank} from 'antd-mobile';
import { List } from 'antd-mobile';
import FetchDataPlaceholder from '../component/FetchDataPlaceholder/'
import Home from './Home'

import '../style/navbar.css'

import { NavBar} from 'antd-mobile';


const tabs = [
    { title: "最热投诉" },
    { title: "最新投诉" },
    { title: "已回复" },
    { title: "已完成" },
];

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false,
            fullScreen: false,
        };
    }



    componentDidMount() {

    }


    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" size="lg"/>}
                    prefixCls='am-navbar-dark'
                >
                    微投诉
                </NavBar>
                <div style="height:100vh;">
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
                                this.setState({
                                    selectedTab: 'home',
                                });
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
                            this.setState({
                                selectedTab: 'complaint',
                            });
                        }}
                        data-seed="logId1"
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
                            title="我的"
                            key="mine"
                            selected={this.state.selectedTab === 'mine'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'mine',
                                });
                            }}
                            data-seed="logId1"
                        >
                            <Home></Home>
                        </TabBar.Item>

                    </TabBar>
                </div>






            </div>
        )
    }
}

export default MainLayout;

