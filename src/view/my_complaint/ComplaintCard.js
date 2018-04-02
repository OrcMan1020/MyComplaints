/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';

import {Card, WhiteSpace, Flex} from 'antd-mobile';

import "./MyComplaint.css"

class ComplaintCard extends Component {



    render() {
        const complaint = this.props.complaint;
        return(
            <div  class="my-complaint-card" onClick={()=>{
                this.context.router.history.push(
                    {
                        pathname:"/complaint-detail",
                        search: 'complaintNo='+complaint.complainNo
                    }
                )
            }}>
                <Card full>
                    <WhiteSpace size="md"/>
                    <Card.Header
                        title={<div>
                            <div style={{fontSize:'20px'}}>{complaint.complainIssue}</div>
                            <WhiteSpace size="sm"/>
                            <div style={{color:'#b4b4b4', fontSize:'13px'}}>{complaint.dateTime}</div>
                        </div>}
                    />


                    <Card.Body style={{wordWrap:'break-word'}}>
                        <Flex>
                            <div style={{flex:4}}>
                                <div>
                                    <Flex>
                                        <div style={{flex:2, color:'#108ee9'}}>
                                            [投诉对象]:
                                        </div>
                                        <div style={{flex:5}}>{complaint.objectName}</div>
                                    </Flex>

                                </div>
                                <WhiteSpace size="md"/>

                                <div>
                                    <Flex>
                                    <span style={{flex:2, alignSelf:'flex-start'}}>
                                        <span style={{color:'#108ee9'}}>[投诉要求]:</span>
                                    </span>
                                        <span style={{flex:5}}>{complaint.request}</span>

                                    </Flex>

                                </div>
                            </div>
                            <div style={{flex:1, paddingLeft:'16px', verticalAlign:'bottom'}}>
                                <img src="./img/icon/done.png" style={{width: '64px', height:'64px', borderRadius:'50%'}}/>
                            </div>
                        </Flex>

                    </Card.Body>


                </Card>
            </div>
        )
    }
}

export default ComplaintCard;