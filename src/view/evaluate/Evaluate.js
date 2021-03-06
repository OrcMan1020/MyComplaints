/**
 * Created by saix on 2018/3/16.
 */
import React, { Component } from 'react';
import {TextareaItem, WhiteSpace, NavBar, Card, Icon, Flex, WingBlank, Button, Toast} from 'antd-mobile';
import MyNavBar from '../../component/MyNavBar/MyNavBar';
import StarRatings from 'react-star-ratings';
import {SubmitComplainFeedBack} from "../../utils/APIs";
import qs from 'query-string';
import "./Evaluate.css";

const STAR_DESC = [
    "",
    "一般",
    "一般",
    "一般",
    "满意",
    "非常满意",
]

class Evaluate extends Component {

    constructor(props){
        super(props);
        this.state = {
            'rate1' : 0,
            'rate2' : 0,
            'rate3' : 0
        }

        const {location={}} = this.props
        const {search=''} = location
        const queryObj = qs.parse(search)
        this.complaintNo = queryObj['complaintNo'] || ''
        this.nickName = queryObj['nickName'] || ''
    }

    goBack = () => {
        this.context.router.history.goBack();
    };


    changeRating = (rateElement) => {
        return (newRate)=>{
            this.setState({
                [rateElement] : newRate
            })
        }
    }

    submitComplainFeedBack () {
        SubmitComplainFeedBack({
            complainNo : this.complaintNo,
            objectName : this.nickName,
            status : "确认完成并评价",
            feedBackScore : JSON.stringify({
                service : this.state.rate1,
                speed : this.state.rate2,
                satis : this.state.rate3
            }),
            feedBackContent: this.refs.comment.state.value || ""
        })
            .then(res=>{
                Toast.success("提交评价成功!", 2, ()=>{
                    this.goBack();
                    //this.context.router.
                })
            })
            .catch(e=>{
                Toast.fail("提交评价失败!"+e, 2);
            })
    }

    render() {
        return (
            <div class="evaluate">

                <MyNavBar title={"评价"}/>

                <WhiteSpace size={'lg'}/>
                <TextareaItem
                    rows={5}
                    placeholder="请说说对商家处理结果是否满意? 帮助我们进步哦~"
                    count={500}
                    ref="comment"
                />

                <WhiteSpace size={'lg'}/>

                <div class='evaluate-star-container'>
                    <div class='evaluate-star-title'>
                        <Flex>
                            <div style={{flex:'1'}}>评价打分</div>
                            <div style={{flex:'3', textAlign:'right', color:'#bbb'}}>
                                满意请给五星
                            </div>
                        </Flex>

                    </div>

                    <div class="evaluate-star">
                        <Flex>
                            <div style={{flex:'2'}}>服务态度:</div>
                            <div style={{flex:'4'}}>
                                <StarRatings
                                    rating={this.state.rate1}
                                    starRatedColor="rgb(255,143, 51)"
                                    starHoverColor="rgb(255,143, 51)"
                                    changeRating={this.changeRating('rate1')}
                                    starDimension={'28px'}
                                    numberOfStars={5}
                                />
                            </div>
                            <div style={{flex:'1', textAlign:'right', color:'#bbb', fontSize:'12px'}}>
                                {STAR_DESC[this.state.rate1]}
                            </div>
                        </Flex>
                        <WhiteSpace size="md"/>

                        <Flex>
                            <div style={{flex:'2'}}>处理态度:</div>
                            <div style={{flex:'4'}}>
                                <StarRatings
                                    rating={this.state.rate2}
                                    starRatedColor="rgb(255,143, 51)"
                                    starHoverColor="rgb(255,143, 51)"
                                    changeRating={this.changeRating('rate2')}
                                    starDimension={'28px'}
                                    numberOfStars={5}
                                />
                            </div>
                            <div style={{flex:'1', textAlign:'right', color:'#bbb', fontSize:'12px'}}>
                                {STAR_DESC[this.state.rate2]}
                            </div>
                        </Flex>
                        <WhiteSpace size="md"/>

                        <Flex>
                            <div style={{flex:'2'}} >满&nbsp;意&nbsp;度&nbsp;:</div>
                            <div style={{flex:'4'}}>
                                <StarRatings
                                    rating={this.state.rate3}
                                    starRatedColor="rgb(255,143, 51)"
                                    starHoverColor="rgb(255,143, 51)"
                                    changeRating={this.changeRating('rate3')}
                                    starDimension={'28px'}
                                    numberOfStars={5}
                                />
                            </div>
                            <div style={{flex:'1', textAlign:'right', color:'#bbb', fontSize:'12px'}}>
                                {STAR_DESC[this.state.rate3]}
                                </div>

                        </Flex>
                    </div>



                </div>

                <div>
                    <WhiteSpace size="lg"/>

                    <WingBlank size="lg"/>
                    <Button className="btn" type="primary"
                            onClick={(e)=>{
                                this.submitComplainFeedBack()
                            }}
                    >提交评价</Button>
                </div>

            </div>
        )
    }

}

export default Evaluate;