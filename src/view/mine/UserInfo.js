/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import {Flex, WhiteSpace, Icon } from 'antd-mobile';

class UserInfo extends Component {

    render() {
        return (
            <div class='user-info'>
                <div class='user-info-empty'/>
                <Flex>
                    <div class='user-info-content'>
                        <div class="avatar-content">
                            <img src="./img/avatar.jpg"/>
                        </div>

                    </div>
                    <div class='text-content'>
                        <div style={{fontSize:'20px', color:'#FFF'}}
                            onClick={()=>{}}>
                            徐赛
                            <span>&nbsp;&nbsp;</span>
                            <Icon type="right" size="md" style={{verticalAlign:'bottom'}}/>
                        </div>
                        <WhiteSpace size="sm"/>
                        <div style={{fontSize:'14px', color:'#FFF',opacity:0.6}}
                             onClick={()=>{}}>编辑资料</div>

                    </div>

                </Flex>

            </div>
        )
    }

}

export default UserInfo;