/**
 * Created by saix on 2018/3/15.
 */

import React, { Component } from 'react';

import { Card, WhiteSpace, Flex, Grid } from 'antd-mobile';
import {IMAGE_URL} from '../../utils/APIs';

import './ComplaintDetail.css'


class Description extends Component {

    render() {

        const complaint = this.props.complaint;

        complaint.evidences = complaint.evidences || "";
        let icons = [];
        if (complaint.evidences.length>0){
            const evidences = complaint.evidences.split(",");
            icons = evidences.map(el=>{
                return {icon : IMAGE_URL(el)}
            });
        }


        return (
            <div class='description'>
                <Card full>
                    <Card.Header
                        title={
                            <div >
                            <img style={{height:'20px', width:'20px', verticalAlign:'middle'}} src="./img/desc.jpg"/>
                                <span style={{fontSize:'16px', verticalAlign:'middle'}}>事件描述 </span>
                                </div>
                        }
                    />
                    <hr/>
                    <Card.Body style={{wordWrap:'break-word'}}>
                        <div>
                            {complaint.detailContent}
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