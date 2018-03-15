import React, { Component } from 'react';

import { Card, WhiteSpace, Flex } from 'antd-mobile';

class OverView extends Component
{
    render() {
        return (
            <div>


            <Card full>
                <div style={{fontSize:'20px', padding:'16px 16px 16px 16px', lineHeight:'32px'}}>
                    <b>苏宁易购购买的康佳A55U液晶电视发生自然烧毁, 并且对家里天花板造成损坏.</b>
                </div>
                <Card.Header
                    title={<div>

                        <div style={{fontSize:'15px'}}>徐赛</div>
                        <WhiteSpace/>
                        <div style={{color:'#b4b4b4', fontSize:'13px'}}>2018-03-13 10:26</div>
                    </div>}
                    thumb={<img src="./img/avatar.jpg" style={{width: '48px', height:'48px', borderRadius:'50%'}}/>}
                    extra={<img src="./img/done.jpg" style={{width: '64px', height:'64px', borderRadius:'50%'}}/>}
                />
                <Card.Body style={{wordWrap:'break-word'}}>
                    <div style={{borderLeft:'solid 5px', borderLeftColor:'#108ee9'}}>
                        <div style={{paddingLeft:'16px'}}>
                            <div>
                                <Flex>
                                    <span style={{flex:1}}>
                                        <span style={{color:'#108ee9'}}>[投诉对象]:</span>
                                    </span>
                                    <span style={{flex:3}}>康佳电视</span>
                                </Flex>

                            </div>
                            <WhiteSpace size="md"/>

                            <div>
                                <Flex>
                                    <span style={{flex:1, alignSelf:'flex-start'}}>
                                        <span style={{color:'#108ee9'}}>[投诉要求]:</span>
                                    </span>
                                    <span style={{flex:3}}>要求赔偿一台同型号新电视, 并且对损坏的地板进行修理</span>

                                </Flex>

                            </div>
                        </div>
                    </div>

                </Card.Body>
            </Card>
            </div>
        );
    }
}

export default OverView;