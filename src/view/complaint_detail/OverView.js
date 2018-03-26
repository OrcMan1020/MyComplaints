import React, { Component } from 'react';

import { Card, WhiteSpace, Flex } from 'antd-mobile';


const statusImg = {
    'done' : "./img/icon/done.png",
    'accept' : "./img/icon/accept.png",
    'reply' : "./img/icon/reply.png"
}


class OverView extends Component
{



    render() {

        const complaint = this.props.complaint;

        return (
            <div>


            <Card full>
                <div style={{fontSize:'20px', padding:'16px 16px 0 16px', lineHeight:'32px'}}>
                    <b>{complaint.complainIssue}</b>
                </div>
                <Card.Header
                    title={<div>

                        <div style={{fontSize:'15px'}}>{complaint.nickName}</div>
                        <div style={{color:'#b4b4b4', fontSize:'12px'}}>2018-03-13 10:26</div>
                    </div>}
                    thumb={<img src={complaint.avatarUrl} style={{width: '48px', height:'48px', borderRadius:'50%'}}/>}
                    extra={<img src={statusImg['done']} style={{width: '64px', height:'64px', borderRadius:'50%'}}/>}
                />
                <Card.Body style={{wordWrap:'break-word'}}>
                    <div style={{borderLeft:'solid 5px', borderLeftColor:'#108ee9'}}>
                        <div style={{paddingLeft:'16px'}}>
                            <div>
                                <Flex>
                                    <div style={{flex:1, color:'#108ee9'}}>
                                        [投诉对象]:
                                    </div>
                                    <div style={{flex:3}}>{complaint.objectName}</div>
                                </Flex>

                            </div>
                            <WhiteSpace size="md"/>

                            <div>
                                <Flex>
                                    <span style={{flex:1, alignSelf:'flex-start'}}>
                                        <span style={{color:'#108ee9'}}>[投诉要求]:</span>
                                    </span>
                                    <span style={{flex:3}}>{complaint.request}</span>

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