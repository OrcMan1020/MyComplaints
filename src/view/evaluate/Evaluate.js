/**
 * Created by saix on 2018/3/16.
 */
import React, { Component } from 'react';
import {TextareaItem, WhiteSpace, NavBar, Card, Icon, Flex, WingBlank, Button} from 'antd-mobile';
import StarRatings from 'react-star-ratings';

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
    render() {
        return (
            <div class="evaluate">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" size="lg"/>}
                    prefixCls='am-navbar-dark'
                    onLeftClick={(e)=>{this.goBack()}}

                >
                    评价
                </NavBar>

                <WhiteSpace size={'lg'}/>
                <TextareaItem
                    rows={5}
                    placeholder="请说说对商家处理结果是否满意? 帮助我们进步哦~"
                    count={500}
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
                            onClick={(e)=>{}}
                    >提交评价</Button>
                </div>

            </div>
        )
    }

}

export default Evaluate;