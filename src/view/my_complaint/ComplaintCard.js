/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';

import {Card, WhiteSpace, Flex} from 'antd-mobile';



class ComplaintCard extends Component {



    render() {
        const complaint = this.props.complaint;
        return(
            <div onClick={()=>{
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

                    <Card.Body>

                        <Flex>



                            <div style={{paddingTop:'8px', flex:4, fontSize: '14px'}}>
                                <div>
                                    <Flex>
                                        <div style={{color:'#6e6eFF', flex:2}}>
                                            [投诉对象]
                                        </div>
                                        <div style={{color:'#000000', flex:5}}>
                                            &nbsp;&nbsp;{complaint.objectName}
                                        </div>
                                    </Flex>

                                </div>
                                <WhiteSpace size="sm"/>

                                <div>
                                    <Flex>
                                        <div style={{color:'#6e6eFF', flex:2}}>
                                            [投诉要求]
                                        </div>
                                        <div style={{color:'#000000', flex:5}}>
                                            &nbsp;&nbsp;{complaint.request || complaint.requestAmount}
                                        </div>
                                    </Flex>

                                </div>
                            </div>
                            <div style={{flex:1, paddingTop:'8px', paddingLeft:'16px', verticalAlign:'bottom'}}>
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