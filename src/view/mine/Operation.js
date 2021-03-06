/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import {List, WhiteSpace} from 'antd-mobile';

class Operation extends Component {

    render() {
        return (
            <div>
                <List>
                    <List.Item thumb="./img/icon/Inkpen.png"
                               extra={<span style={{color:'#ff632a', opacity:0.6, fontSize:'16px'}}>有状态更新</span>}
                               arrow="horizontal"
                               onClick={(e)=>{this.context.router.history.push(
                                   {
                                       pathname:"/my-complaint",
                                       search: ''
                                   }
                               )}}>
                        我的投诉
                    </List.Item>
                    <List.Item thumb="./img/icon/level.png"
                               arrow="horizontal"
                               onClick={() => {}}>
                        信用等级说明
                    </List.Item>
                    <List.Item thumb="./img/icon/mail.png"
                               arrow="horizontal"
                               onClick={(e)=>{this.context.router.history.push(
                                   {
                                       pathname:"/suggestion",
                                       search: ''
                                   }
                               )}}>
                        反馈意见
                    </List.Item>
                    <List.Item thumb="./img/icon/Portfolio.png"
                               arrow="horizontal"
                               onClick={() => {}}>
                        媒体合作
                    </List.Item>
                    <List.Item thumb="./img/icon/Notepad.png"
                               arrow="horizontal"
                               onClick={() => {}}>
                        常见问题
                    </List.Item>
                </List>
            </div>
        )
    }

}

export default Operation;