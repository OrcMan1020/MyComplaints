/**
 * Created by saix on 2018/3/12.
 */
import React, { Component } from 'react';
import {TabBar} from 'antd-mobile';
import Home from './home/Home'
import AddComplaint from './add_complaint/AddComplaint';
import Mine from './mine/Mine';

import '../style/navbar.css'
import MyNavBar from '../component/MyNavBar/MyNavBar';
import qs from 'query-string';
import cookie from 'react-cookies'

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
        'url(./img/icon/home-tab-un.png) center center /  21px 21px no-repeat ',
        'url(./img/icon/home-tab.png) center center /  21px 21px no-repeat'
    ],
    'complaint' : [
        'url(./img/icon/complaint-tab-un.png) center center /  21px 21px no-repeat',
        'url(./img/icon/complaint-tab.png) center center /  21px 21px no-repeat'
    ],
    'mine' : [
        'url(./img/icon/mine-tab-un.png) center center /  21px 21px no-repeat',
        'url(./img/icon/mine-tab.png) center center /  21px 21px no-repeat'
    ]


};


class MainLayout extends Component {

    componentDidMount() {
        // cookie.save('unionid', 1)
        console.log(cookie.load('unionid'));
    }


    constructor(props) {
        super(props);

        let search = qs.parse(window.location.search);
        window.selectedTab = search['selected'] || window.selectedTab || 'home';

        this.state = {
            selectedTab: window.selectedTab,
            hidden: false,
            fullScreen: false,
            navBarTitle : ''
        };



    }


    goToTab = (selectedTab, refresh) => {
        window.selectedTab = selectedTab;
        window.scrollTo(0,0)
        this.setState({
                selectedTab : selectedTab,
                refresh : refresh
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
                        tintColor="#6c72ff"
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
                            <Home refresh={this.state.refresh}></Home>
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

