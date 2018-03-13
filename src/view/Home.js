/**
 * Created by saix on 2018/3/13.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import {TabBar, Carousel, Icon, SearchBar, Tabs, WhiteSpace, WingBlank, List, NavBar} from 'antd-mobile';
import LineCrossText from '../component/LineCrossText/'

import '../style/home.css'
import InfoCar from './InfoCard';
import '../style/list.css'

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
        };
    }



    render() {
        return (

            <div class="home-constainer">
                <div class="home-search">
                    <SearchBar placeholder="输入关键字搜索" />

                </div>
                <div class="home-constainer">
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
                    <Tabs tabs={tabs}
                          initialPage={0}
                          onChange={(tab, index) => { console.log('onChange', index, tab); }}
                          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >


                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff'}}>

                            <List style={{width:'100%'}}>
                                <Item style={{backgroundColor:'#f6f6f6' }}>
                                    <InfoCar/>
                                    <WhiteSpace size="md"/>

                                    <InfoCar/>
                                    <WhiteSpace size="md"/>

                                    <InfoCar/>
                                    <WhiteSpace size="md"/>

                                    <InfoCar/>
                                    <LineCrossText>到底啦</LineCrossText>

                                </Item>
                            </List>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                            Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                            Content of third tab
                        </div>
                    </Tabs>

            </div>
        );
    }
}

export default Home;
