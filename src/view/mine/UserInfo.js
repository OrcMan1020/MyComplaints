/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import {Flex, WhiteSpace, Icon } from 'antd-mobile';

class UserInfo extends Component {

    render() {
        // this.props.userInfo = this.props.userInfo || {userInfo:{}};
        let {userInfo} = this.props;
        const {creditScore} = userInfo;
        const userInfoDetail = userInfo.userInfo;
        let {nickName, gender, language, city, province, country, avatarUrl} = userInfoDetail;

        return (
            <div class='user-info'>
                <div class='user-info-empty'/>
                <Flex>
                    <div class='user-info-content'>
                        <div class="avatar-content">
                            <img src={avatarUrl||userInfoDetail.headimgurl}/>
                        </div>

                    </div>
                    <div class='text-content'>
                        <div style={{fontSize:'20px', color:'#FFF'}}
                            onClick={()=>{}}>
                            {nickName|| userInfoDetail.nickname}
                            <span>&nbsp;&nbsp;</span>
                            <Icon type="right" size="md" style={{verticalAlign:'middle'}}/>
                        </div>
                        <WhiteSpace size="sm"/>
                        <div style={{fontSize:'14px', color:'#FFF',opacity:0.6}}
                             onClick={()=>{}}>{`${country} ${province} ${city}`}</div>
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