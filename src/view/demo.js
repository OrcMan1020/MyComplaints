/**
 * Created by saix on 2018/3/12.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import {TabBar, Carousel, Icon} from 'antd-mobile';
import { List } from 'antd-mobile';
import FetchDataPlaceholder from '../component/FetchDataPlaceholder/'
import { Tabs, WhiteSpace, WingBlank } from 'antd-mobile';
import {Timeline, TimelineEvent} from 'react-event-timeline'

const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];

const LOAN_LIST_LOADING_HEIGHT = {
    height: 200
}
const BANNER_LIST_LOADING_HEIGHT = {
    height: 100
}
const Item = List.Item;
const Brief = Item.Brief;

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           fullScreen: !this.state.fullScreen,
                       });
                   }}
                >
                    Click to switch fullscreen
                </a>
            </div>
        );
    }

    render() {
        const imageUrl = "img/home.svg";

        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <WingBlank style={{ padding: '18px' }}>
                    <WhiteSpace/>
                    <Timeline>
                        <TimelineEvent
                            icon={<i className="material-icons md-18">textsms</i>
                            }

                        >
                            <div style={{minHeight:'100px'}}>I</div>
                        </TimelineEvent>
                        <TimelineEvent
                            title="You sent an email to John Doe"
                            createdAt="2016-09-11 09:06 AM"
                            icon={<img style={{borderRadius:'50%',width:'34px',height:'34px'}} src="http://avatar.csdn.net/F/B/1/3_wangkai_123456.jpg"/>}
                            bubbleStyle={{borderColor:'#f5f5f9'}}
                        >
                            <b>Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                                am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                                gentle reminder if you are on track already!</b>
                        </TimelineEvent>
                    </Timeline>
                </WingBlank>

            </div>
        );
    }
}

export default MainLayout;


