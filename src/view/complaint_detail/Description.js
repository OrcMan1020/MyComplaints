/**
 * Created by saix on 2018/3/15.
 */

import React, { Component } from 'react';

import { Card, WhiteSpace, Flex, Grid } from 'antd-mobile';

import './ComplaintDetail.css'


class Description extends Component {

    render() {

        const icons = [
            {icon : './img/wechat.png'},
            {icon : './img/weibo.png'},
            {icon : './img/unknown.png'},
            {icon : './img/qq.png'},

        ];

        return (
            <div class='description'>
                <Card full>
                    <Card.Header
                        title={
                            <div >
                            <img style={{height:'20px', width:'20px', verticalAlign:'bottom'}} src="./img/desc.jpg"/><span style={{fontSize:'16px'}}>事件描述 </span>
                                </div>
                        }
                    />
                    <hr/>
                    <Card.Body style={{wordWrap:'break-word'}}>
                        <div>
                            2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买2月7号在苏宁易购购买
                        </div>
                        <WhiteSpace size="lg"/>
                        <Grid data={icons}
                              hasLine={false}
                              columnNum={4}
                              activeStyle={false}
                              renderItem={dataItem => (
                                  <div style={{paddingLeft:'4px', paddingRight:'4px'}}>
                                      <img src={dataItem.icon} style={{ width: '100%', height: '100%'}} alt=""
                                           onClick={(e)=>console.log(dataItem.icon)}/>
                                  </div>
                              )}
                        />

                        <WhiteSpace size="md"/>

                    </Card.Body>
                </Card>
            </div>
        )
    }


}

export default Description;