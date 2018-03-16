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
import MyNavBar from '../component/MyNavBar/MyNavBar';

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
const iconMap = {
    'home' : [
        'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
        'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
    ],
    'complaint' : [
        'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
        'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
    ],
    'mine' : [
        'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
        'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
    ]


}


class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: window.selectedTab || 'home',
            hidden: false,
            fullScreen: false,
            navBarTitle : ''
        };
    }



    componentDidMount() {

    }

    goToTab = (selectedTab) => {
        window.selectedTab = selectedTab;
        this.setState({
                selectedTab : selectedTab
            }
        );
    }



    renderTabBarIcon(name, selected) {
        return (
            <div style={{
                width: '22px',
                height: '22px',
                background: iconMap[name][selected?1:0] }}
            />
        )
    }

    render() {
        return (
            <div>
                <MyNavBar
                    hiddenBack={true}
                    title={titles[this.state.selectedTab]}
                />

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
                            icon={this.renderTabBarIcon('home', false)}
                            selectedIcon={this.renderTabBarIcon('home', true)}
                            selected={this.state.selectedTab === 'home'}
                            onPress={() => {
                                this.goToTab('home')
                            }}
                        >
                            <Home></Home>
                        </TabBar.Item>


                        <TabBar.Item
                            icon={this.renderTabBarIcon('complaint', false)}
                            selectedIcon={this.renderTabBarIcon('complaint', true)}

                            title="投诉"
                            key="complaint"
                            selected={this.state.selectedTab === 'complaint'}
                            onPress={() => {
                                this.goToTab('complaint')
                            }}
                        >
                            <AddComplaint goToTab={this.goToTab.bind(this)}></AddComplaint>
                        </TabBar.Item>


                        <TabBar.Item
                            icon={this.renderTabBarIcon('mine', false)}
                            selectedIcon={this.renderTabBarIcon('mine', true)}
                            title="我的"
                            key="mine"
                            selected={this.state.selectedTab === 'mine'}
                            onPress={() => {
                                this.goToTab('mine')
                            }}
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

