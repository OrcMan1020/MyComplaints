/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';

import {Card, WhiteSpace, Flex} from 'antd-mobile';

class ComplaintCard extends Component {
    render() {
        return(
            <div onClick={()=>{
                this.context.router.history.push(
                    {
                        pathname:"/complaint-detail",
                        search: ''
                    }
                )
            }}>
                <Card full>
                    <WhiteSpace size="md"/>
                    <Card.Header
                        title={<div>
                            <div style={{fontSize:'20px'}}>天河机场被骗办理商旅VIP卡</div>
                            <WhiteSpace size="sm"/>
                            <div style={{color:'#b4b4b4', fontSize:'13px'}}>2018-03-13 09:24</div>
                        </div>}
                    />

                    <Card.Body>

                        <Flex>

                            <div style={{paddingTop:'8px', flex:4, fontSize: '13px'}}>
                                <div>
                            <span style={{color:'#6e6eFF'}}>
                              [投诉对象] &nbsp;&nbsp;
                            </span>
                                    <span style={{color:'#000000'}}>
                              华宇国际教育
                            </span>
                                </div>
                                <WhiteSpace size="sm"/>

                                <div>
                                    <Flex>
                                        <div style={{color:'#6e6eFF', flex:1, alignSelf:'flex-start'}}>
                                            [投诉要求] &nbsp;&nbsp;
                                        </div>
                                        <div style={{color:'#000000', flex:3}}>
                                            尽快解决问题！！尽快解决问题！！尽快解决问题！！尽快解决问题！！尽快解决问题！！
                                        </div>
                                    </Flex>

                                </div>
                            </div>
                            <div style={{flex:1, paddingLeft:'16px', verticalAlign:'bottom'}}>
                                <img src="./img/done.jpg" style={{width: '64px', height:'64px', borderRadius:'50%'}}/>
                            </div>

                        </Flex>


                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ComplaintCard;