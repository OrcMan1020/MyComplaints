/**
 * Created by saix on 2018/3/13.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import {TabBar, Carousel, Icon, SearchBar, Tabs, WhiteSpace, WingBlank, List, NavBar} from 'antd-mobile';
import LineCrossText from '../../component/LineCrossText/'

import '../../style/home.css'
import InfoCar from './InfoCard';
import '../../style/list.css'

const tabs = [
    { title: "最热投诉" },
    { title: "最新投诉" },
    { title: "已回复" },
    { title: "已完成" },
];

const Item = List.Item;
const Brief = Item.Brief;


class Home extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
            initialPage: window.initialPage || 1
        };
    }

    renderList(type) {
        return (
            <div class='using-card'>
                <List style={{width:'100%'}}>
                    <Item style={{backgroundColor:'#f6f6f6' }}>
                        <InfoCar/>
                    </Item>
                    <Item style={{backgroundColor:'#f6f6f6' }}>
                        <InfoCar/>
                    </Item>
                    <Item style={{backgroundColor:'#f6f6f6' }}>
                        <InfoCar/>
                    </Item>
                    <Item style={{backgroundColor:'#f6f6f6' }}>
                        <InfoCar/>
                    </Item>
                    <Item style={{backgroundColor:'#f6f6f6' }}>
                        <InfoCar/>
                        <LineCrossText>到底啦</LineCrossText>
                    </Item>


                </List>
            </div>
        )
    }


    render() {
        return (

            <div>

                <div class="home-constainer">
                    <div class="home-search">
                        <SearchBar placeholder="输入关键字搜索" />

                    </div>
                    <Carousel
                        autoplay={false}
                        infinite
                        selectedIndex={0}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href=""
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`./img/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}

                    </Carousel>



                </div>

                <div className="mytabs">
                    <Tabs tabs={tabs}
                          initialPage={this.state.initialPage}
                          onChange={(tab, index) => { console.log('onChange', index, tab);}}
                          onTabClick={(tab, index) => { window.initialPage = index; console.log('onTabClick', index, tab); }}
                          tabBarInactiveTextColor = '#bbb'
                          tabBarActiveTextColor="#5555FF"
                          swipeable={false}

                    >


                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff'}}>
                            {this.renderList()}

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff'}}>
                            {this.renderList()}

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff'}}>
                            {this.renderList()}

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff'}}>
                            {this.renderList()}

                        </div>
                    </Tabs>
                </div>
            </div>


        );
    }
}

export default Home;
