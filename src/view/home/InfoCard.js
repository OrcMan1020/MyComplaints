/**
 * Created by saix on 2018/3/13.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

import { Card, WhiteSpace } from 'antd-mobile';

const statusImg = {
    'done' : "./img/icon/done.png",
    'accept' : "./img/icon/accept.png",
    'reply' : "./img/icon/reply.png"
}


class InfoCard extends Component {
    constructor(props){
        super(props);


    }
    /*
     {"id":1,"unionId":"oQUT50NmUdgM4u_xjNpAiDwf8i50","complainNo":"e2e4c80c-28e7-11e8-87e4-14abc59014c4","objectName":"英孚教育","complainIssue":"虚假宣传,赔偿问题,退款问题,欺诈","request":"退款,退费,道歉,快速处理,依法追究责任","mainTitle":"英孚教育欺骗消费者","requestAmount":"20 999 元","detailContent":"1.2017年10月27日苏州英孚教育成人英语（晋合中心）邀请我去试听，因为本着提高英语水平的想法，自己过去试听，后来课程顾问进行洗脑式推销，不断夸大英语的作用和宣传自家英语教学质量如何好，顾问推荐了两年20999元的课程，由于自己工作没几个月，顾问说可以进行贷款，由于本人刚毕业，对贷款不太熟悉，更不知信用卡是什么，有什么作用。英孚顾问利用这个漏洞帮我申请了一张高额度信用卡，信用卡资料全部由英孚教育顾问进行填写，后来在银行查知信用卡申请资料与本人年收入严重偏离，后来信用卡下来之后英孚一次性刷取人民币20999元，并将此金额人民币办理了分期，并让本人填写贷款声明函，声明函前后无任何贷款协议，只有一张声明函，本人在此诉讼英孚进行洗脑式推销，涉嫌信用卡欺诈。2.英孚办理信用卡，由英孚工作人员在当事人不知情的情况下在自己的iPad上填写资料，资料填写不符合实际，年收入填写为10万，不符合个人风险承受能力，触犯了信用卡管理罪和信用卡欺诈罪，违反了刑法第二百八十条的规定。（为信用卡申请人制作、提供虚假的财产状况、收入、职务等资信证明材料，涉及伪造、变造、买卖国家机关公文、证件、印章，或者涉及伪造公司、企业、事业单位、人民团体印章，应当追究刑事责任的，依照刑法第二百八十条的规定，分别以伪造、变造、买卖国家机关公文、证件、印章罪和伪造公司、企业、事业单位、人民团体印章罪定罪处罚）3.英孚以免费试听网络课为诱导，诱导学员过去试听，后来以押金200和1000元入学奖励诱导消费者进行消费，消费者没有消费能力，于是英孚销售人员推荐办理信用卡并在消费者不知情的情况下胡乱填写消费者个人年收入，以获得高额度的信用卡。该行为涉嫌信用卡欺诈和信用卡管理罪。4.学员在经过几个月的学习过程中未取得实际学习效果，英语水平并未进步，英孚过分虚假宣传，特要求退未学课程学费。5.本人于2018年2月14号向课程顾问告知学习效果不理想，要退费，课程顾问却以超过30天不能退款为由拒绝退款。我们学员在与英孚签订的《英孚课程协议》中写着符合以下情形，学员可申请退款。自协议日起30天内（包括协议当天），无需任何理由，中心将全额退款。除此之外，学员并没有发现合同还有其他与退款相关的条款。更没有看到“超过30天不予退款”的字样。报名时英孚人员并未提及超过三十天不能退款，可是我们学员对于退款要求多次交涉下来，等到英孚人员的答复是：超过30天肯定不能退款。故本人进行投诉，英孚机构故意欺骗，此条款属于霸王条款，单项加重消费者负担，逃避法律法规的管理，逃避道德的约束，利用信用卡圈钱，进行信用卡欺诈。","mobile":null,"evidences":null,"privateContent":null,"privateEvidences":null,"status":null,"nickName":"投诉人 薛女士","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgLfa9VBZJmfr9DWApOiaQASLveuPWM5LwC2ZTYGZYXmn0usBDBosk6qHMNq0IFm8gcw/0","dateTime":"2018-02-27 11:50:41"}
    */
    render() {




        const {unionId, complainNo, objectName, complainIssue, request, detailContent, nickName, avatarUrl, dateTime, status} = this.props.data;



        const img = statusImg[(Object.keys(statusImg))[parseInt(Math.random()*100)%3]];
        return (

          <div class="info-card" id={unionId}
               complainNo={complainNo}
               onClick={()=>{

              this.context.router.history.push(
                  {
                      pathname:"/complaint-detail",
                      search: ''
                  }
              )
          }}>
              <Card full>
                  <Card.Header
                      title={<div>
                          <div style={{fontSize:'15px'}}>{nickName}</div>
                          <div style={{color:'#b4b4b4', fontSize:'12px'}}>{dateTime}</div>
                      </div>}
                      thumb={<img src={avatarUrl} class="info-card card-head-thumb"/>}
                      extra={<img src={img} class="info-card card-head-extra"/>}
                  />
                  <Card.Body>
                      <div style={{fontSize:'18px'}}>{complainIssue}</div>
                      <div style={{width:'100%', color:'#b4b4b4', fontSize:'13px', wordWrap:'break-word', whiteSpace:'normal'}}>{detailContent}</div>

                  </Card.Body>
                  <Card.Footer content={
                      <div>
                          <div style={{fontSize:'13px'}}>
                            <span style={{color:'#6e6eFF'}}>
                              [投诉对象] &nbsp;&nbsp;
                            </span>
                              <span style={{color:'#000000'}}>
                                  {objectName}
                            </span>
                          </div>
                          <div style={{fontSize:'13px'}}>
                            <span style={{color:'#6e6eFF'}}>
                            [投诉要求] &nbsp;&nbsp;
                            </span>
                              <span style={{color:'#000000'}}>
                                  {request}
                      </span>
                          </div>
                          </div>
                  } />
              </Card>


          </div>
        );
    }
}

export default InfoCard;