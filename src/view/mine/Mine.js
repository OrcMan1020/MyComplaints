/**
 * Created by saix on 2018/3/15.
 */

import React, { Component } from 'react';
import {WhiteSpace, Toast} from 'antd-mobile';


import UserInfo from './UserInfo';
import Opertation from './Operation';
import About from './About';

import {GetUserInfo} from '../../utils/APIs';

import './Mine.css';

class Mine extends Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo : {userInfo:{}}
        }

    }

    componentDidMount() {
        GetUserInfo(window.localStorage.unionId)
            .then(res=>{
                res.userInfo = JSON.parse(res.userInfo)
                this.setState({
                    userInfo : res
                })
            })
            .catch(e=>{
                Toast.fail("查询用户信息失败!", 2);
            })

    }


        render() {

        return (
            <div class='mine'>
                <UserInfo userInfo={this.state.userInfo}/>
                <WhiteSpace size="md"/>
                <Opertation userInfo={this.state.userInfo}/>
                <WhiteSpace size="md"/>
                <About/>
                <WhiteSpace size="md"/>
            </div>
        )
    }
}

export default Mine;