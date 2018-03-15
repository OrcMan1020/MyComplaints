/**
 * Created by saix on 2018/3/15.
 */

import React, { Component } from 'react';
import {WhiteSpace} from 'antd-mobile';


import UserInfo from './UserInfo';
import Opertation from './Operation';
import About from './About';

import './Mine.css';

class Mine extends Component {
    render() {
        return (
            <div class='mine'>
                <UserInfo/>
                <WhiteSpace size="md"/>
                <Opertation/>
                <WhiteSpace size="md"/>
                <About/>
                <WhiteSpace size="md"/>
            </div>
        )
    }
}

export default Mine;