/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import {List, WhiteSpace} from 'antd-mobile';

class About extends Component {

    render() {
        return (
            <div>
                <List>
                    <List.Item thumb="./img/icon/info.png"
                               arrow="horizontal"
                               onClick={(e)=>{this.context.router.history.push(
                                   {
                                       pathname:"/about-us",
                                       search: ''
                                   }
                               )}}>
                        关于微投诉
                    </List.Item>
                </List>
            </div>
        )
    }

}

export default About;