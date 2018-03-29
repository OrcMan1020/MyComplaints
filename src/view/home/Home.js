/**
 * Created by saix on 2018/3/13.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import {TabBar, Carousel, Icon, SearchBar, Tabs, WhiteSpace, WingBlank, List, ListView, PullToRefresh, Toast} from 'antd-mobile';
import LineCrossText from '../../component/LineCrossText/'
import {Loading} from '../Loading';
import fetch from 'unfetch';

import './Home.css'
import InfoCar from './InfoCard';
import '../../style/list.css'

import {API_CONFIG} from "../../utils/Config";
import {GetHottestComplains} from '../../utils/APIs';

const tabs = [
    { title: "最热投诉", path :  "getHottestComplains"},
    { title: "最新投诉" , path :  "getHottestComplains"},
    { title: "已回复", path :  "getHottestComplains"},
    { title: "已完成", path :  "getHottestComplains"},
];

const Item = List.Item;
const Brief = Item.Brief;


class Home extends Component {
    constructor(prop) {
        super(prop);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            // imgHeight: 176,
            slideIndex: 0,
            initialPage: window.initialPage || 0,
            data: [],
            dataSource: this.dataSource
        };

    }

    componentDidMount() {
        this.init()
    }

    componentWillUnmount(){
        //window.scrollTo(0,0)
        // this.onRefresh = null;
    }

    init(){

        this.currentPage = 0
        this.pageSize = 5
        this.totalPages = 0
        this.rData = []
        this.searchKey = ""

        this.setState({

            isLoading : true,
            hasMore: false,
            dataSource: this.state.dataSource.cloneWithRows(this.rData)
        })

        this.fetchData()
    }



    fetchData(){
        GetHottestComplains(this.currentPage, this.pageSize, this.searchKey)
            .then((data) => {
                this.totalPages = data.totalPages;
                let hasMore = true;
                if (this.currentPage+1 >= this.totalPages) {
                    hasMore = false;
                }
                else {
                    this.currentPage++
                }
                if (data.content && data.content.length>0){
                    console.log(this.rData)

                    this.rData = this.rData.concat(data.content);
                    console.log(this.rData)
                    this.setState({
                        data : data.content,
                        dataSource: this.state.dataSource.cloneWithRows(this.rData),
                        isLoading: false,
                        hasMore,
                    })
                }

            })
    }






    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading || !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        this.fetchData();
    }

    renderList(type) {

        const separator = (sectionID, rowID) => (
            <div
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            return (
                <InfoCar data={rowData}/>
            )
        }

        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderRow={row}
                renderFooter={this.renderFooter}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                pullToRefresh={<PullToRefresh
                    refreshing={this.state.isLoading}
                    onRefresh={this.onRefresh.bind(this)}
                    direction={'up'}
                    distanceToRefresh={30}
                />}
            />
        )
    }
    onRefresh = () => {

        if(!this.props.enablePullRefresh){
            return;
        }

        if(!this.state.hasMore){
            Toast.info("到底啦!", 1)
        }

        if (this.state.isLoading || !this.state.hasMore) {
            return;
        }
        this.renderFooter = null;
        this.setState({isLoading: true });
        // simulate initial Ajax
        this.fetchData();
    };

    render() {
        if(this.props.refresh){
            this.props.refresh = false
            this.init();
        }
        return (

            <div>

                <div class="home-constainer">
                    <div class="home-search">
                        <SearchBar placeholder="输入关键字搜索"
                                   onSubmit={value => {
                                       console.log(value, 'onSubmit')
                                       this.init()
                                   }}
                        />

                    </div>

                        <a
                            key={1}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`./img/2.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height:'100%' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>




                </div>

                <div className="mytabs" style={{paddingTop:'8px'}}>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff'}}>
                        {this.renderList()}

                    </div>



                </div>
            </div>


        );
    }
}

export default Home;
