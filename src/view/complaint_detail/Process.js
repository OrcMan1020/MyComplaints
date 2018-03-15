/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import { Card, WhiteSpace, Flex } from 'antd-mobile';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import ReactStars from 'react-stars';

class Process extends Component {


    render() {
        return (

        <div class='process'>
            <Card full>
                <Card.Header
                    title={
                        <div >
                            <img style={{height:'20px', width:'20px', verticalAlign:'bottom'}} src="./img/desc.jpg"/><span style={{fontSize:'16px'}}>处理动态 </span>
                        </div>
                    }
                />
                <hr/>
                <Card.Body style={{wordWrap:'break-word'}}>
                    <Timeline>
                        <TimelineEvent
                            icon={<img style={{borderRadius:'50%',width:'32px',height:'32px'}} src="./img/avatar.jpg"/>}
                            bubbleStyle={{borderColor:'#f5f5f9'}}

                        >
                            <div>
                                <div style={{fontSize:'18px'}}>微投诉小秘书&nbsp;
                                    <span style={{color:'#108ee9'}}>审核通过</span>
                                </div>

                                <div style={{fontSize:'12px', color:'#bbb'}}>
                                    2018-03-07 15:06:00
                                </div>


                            </div>
                        </TimelineEvent>
                        <TimelineEvent
                            icon={<img style={{borderRadius:'50%',width:'32px',height:'32px'}} src="./img/avatar.jpg"/>}
                            bubbleStyle={{borderColor:'#f5f5f9'}}

                        >
                            <div>
                                <div style={{fontSize:'18px'}}>微投诉小秘书&nbsp;
                                    <span style={{color:'#108ee9'}}>商家处理中...</span>
                                </div>

                                <div style={{fontSize:'12px', color:'#bbb'}}>
                                    2018-03-07 15:06:00
                                </div>
                                <div style={{fontSize:'14px', color:'#878787'}}>
                                    已分配给商家: 康佳售后服务中心
                                </div>

                            </div>
                        </TimelineEvent>

                        <TimelineEvent
                            icon={<img style={{borderRadius:'50%',width:'32px',height:'32px'}} src="./img/avatar.jpg"/>}
                            bubbleStyle={{borderColor:'#f5f5f9'}}

                        >
                            <div>
                                <div style={{fontSize:'18px'}}>康佳公司&nbsp;
                                    <span style={{color:'#108ee9'}}>商家回复</span>
                                </div>

                                <div style={{fontSize:'12px', color:'#bbb'}}>
                                    2018-03-07 15:06:00
                                </div>
                                <div style={{fontSize:'14px', color:'#878787'}}>
                                    这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈
                                </div>

                            </div>
                        </TimelineEvent>
                        <TimelineEvent
                            icon={<img style={{borderRadius:'50%',width:'32px',height:'32px'}} src="./img/avatar.jpg"/>}
                            bubbleStyle={{borderColor:'#f5f5f9'}}

                        >
                                <div style={{fontSize:'18px'}}>你的名字
                                    <span style={{color:'#108ee9'}}>回复确认</span>
                                </div>

                                <div style={{fontSize:'12px', color:'#bbb'}}>
                                    2018-03-07 15:06:00
                                </div>
                                <div style={{fontSize:'14px', color:'#878787'}}>
                                    已解决问题, 辛苦你们了
                                </div>

                            <WhiteSpace/>
                                <Flex>
                                    <div style={{flex:'1'}}>服务态度:</div>
                                    <div style={{flex:'3'}}>
                                        <ReactStars count={5}
                                                      value={3}
                                                      color2={'#ff8f33'}
                                                      edit={false}/>
                                        </div>
                                </Flex>
                            <Flex>
                                <div style={{flex:'1'}}>处理态度:</div>
                                <div style={{flex:'3'}}>
                                    <ReactStars count={5}
                                                value={3}
                                                color2={'#ff8f33'}
                                                edit={false}/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{flex:'1'}}>满意度:</div>
                                <div style={{flex:'3'}}>
                                    <ReactStars count={5}
                                                value={3}
                                                color2={'#ff8f33'}
                                                edit={false}/>
                                </div>
                            </Flex>

                        </TimelineEvent>

                    </Timeline>

                    <WhiteSpace size="md"/>

                </Card.Body>
            </Card>
        </div>



        )
    }

}

export default Process;