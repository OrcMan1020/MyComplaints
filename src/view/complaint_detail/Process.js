/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import { Card, WhiteSpace, Flex, Button, Modal, List, TextareaItem, ImagePicker,
    Checkbox, WingBlank} from 'antd-mobile';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import ReactStars from 'react-stars';

const AgreeItem = Checkbox.AgreeItem;


class TimeLineHeader extends Component{
    render(){
        return (
            <div>
                <div style={{fontSize:'18px'}}>{this.props.name}&nbsp;
                    <span style={{color:'#108ee9'}}>{this.props.action}</span>
                </div>

                <div style={{fontSize:'12px', color:'#bbb'}}>
                    {this.props.date}
                </div>
            </div>
        )

    }
}


class Process extends Component {

    constructor(props){
        super(props);

        this.processStep = {
            'step1' : 'pass',
            'step2' : 'need_info',
            'step3' : 'need_rating',
        }

        this.state = {
            addInfoModel: false,
            files : [],
            enableSubmit: false,
        }

    }

    showModal = key => (e) => {
        e.preventDefault();
        this.setState({
            [key]: true,
        });
    };
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    };


    renderTimeLineItem(display, src, contentRender, contentStatus){
        if(!display) {
            return null;
        }
        else {
            return (
                <TimelineEvent
                    icon={<img style={{borderRadius:'50%',width:'32px',height:'32px'}}
                             src={src}/>}
                    bubbleStyle={{borderColor:'#f5f5f9'}}

                >
                    {contentRender(contentStatus)}
                </TimelineEvent>
            )
        }
    }

    renderStep1() {
        return (
            <div>
                <TimeLineHeader
                    name="微投诉服务小秘书"
                    action="审核通过"
                    date="2018-03-07 15:06:00"
                />
            </div>

        );
    }

    renderStep2(status) {
        const _render = (action, date, detail)=>{
            return (
                <div>
                    <TimeLineHeader
                        name="微投诉服务小秘书"
                        action={action}
                        date={date}
                    />
                    <div style={{fontSize:'14px', color:'#878787'}}>
                        {detail}
                    </div>

                </div>
            )
        }
        if(status==='done') {
            return (
                _render('商家处理中...', '2018-03-07 15:06:00', '已分配给商家: 康佳售后服务中心')
            );
        }
        else if(status === 'need_info'){
            return (
                <div>
                    {_render('用户补充资料...', '2018-03-07 15:06:00', '资料不完整, 请补充购买凭据后再提交')}
                    <WhiteSpace size="lg"/>
                    <Button type="primary"
                            inline
                            style={{ marginRight: '4px'}}
                            size="small"
                            onClick={this.showModal('addInfoModel')
                            }>
                        立即补充资料
                    </Button>
                </div>
            )
        }

    }


    renderStep3(status) {

        const _render = ()=>{
            return (
                <div>
                    <TimeLineHeader
                        name="康佳公司"
                        action="商家回复"
                        date="2018-03-07 15:06:00"
                    />
                    <div style={{fontSize:'14px', color:'#878787'}}>
                        这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈这是商家售后反馈
                    </div>

                </div>
            )
        }

        if(status === 'done') {
            return(
                _render()
            )
        }
        else if(status==='need_rating'){
            return (
                <div>
                    {_render()}
                    <WhiteSpace size="lg"/>
                    <Button type="primary"
                            inline
                            style={{ marginRight: '4px'}}
                            size="small"
                            onClick={(e)=>{
                                this.context.router.history.push(
                                    {
                                        pathname:"/evaluate",
                                        search: ''
                                    }
                                )
                            }}
                    >评价处理结果</Button>
                </div>
            )
        }
    }

    renderStep4(status) {
        if(status === 'done'){
            return(
                <div>
                    <TimeLineHeader
                        name="你的名字"
                        action="回复确认"
                        date="2018-03-07 15:06:00"
                    />
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
                </div>
            )
        }
    }


    render() {
        return (

        <div class='process'>
            <Card full>
                <Card.Header
                    title={
                        <div >
                            <img style={{height:'20px', width:'20px', verticalAlign:'middle'}} src="./img/desc.jpg"/><span style={{fontSize:'16px'}}>处理动态 </span>
                        </div>
                    }
                />
                <hr/>
                <Card.Body style={{wordWrap:'break-word'}}>
                    <Timeline>
                        {this.renderTimeLineItem(true,
                            "./img/avatar.jpg",
                            this.renderStep1.bind(this)
                        )}
                        {this.renderTimeLineItem(true,
                            './img/avatar.jpg',
                            this.renderStep2.bind(this),
                            'need_info')
                        }
                        {this.renderTimeLineItem(true,
                            './img/avatar.jpg',
                            this.renderStep3.bind(this),
                            'need_rating')
                        }
                        {this.renderTimeLineItem(true,
                            './img/avatar.jpg',
                            this.renderStep4.bind(this),
                            'done')
                        }

                    </Timeline>

                    <WhiteSpace size="md"/>

                </Card.Body>
            </Card>
            {this.addInfoModel()}
        </div>
        )
    }



    onChangeFiles = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    };

    addInfoModel(){
        const { files } = this.state;
        return (
            <Modal
                popup
                visible={this.state.addInfoModel}
                onClose={this.onClose('addInfoModel')}
                animationType="slide-up"
            >
                <div class="model-text-area">

                <List>
                    <List.Item>
                        <WhiteSpace size={'lg'}/>
                        <div style={{fontSize:'15px'}}>
                            <span>补充内容:</span><span style={{paddingLeft:'30px', color:'#bbb'}} >填写补充资料</span>
                        </div>
                        <TextareaItem
                            rows={5}
                        />
                    </List.Item>
                    <List.Item>
                        <div style={{fontSize:'15px'}}>
                            添加附件:
                            <span style={{paddingLeft:'30px', color:'#bbb'}}>支持jpg,png,gif格式, 最多上传10张</span>
                        </div>

                        <ImagePicker
                            files={files}
                            onChange={this.onChangeFiles}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length <= 10}
                        />
                    </List.Item>
                </List>

                    <WhiteSpace size="md"/>

                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId"
                                       checked={this.state.enableSubmit}
                                       onChange={(e) => { this.setState({
                                           enableSubmit : !this.state.enableSubmit
                                           }

                                       )}}>
                                同意微投诉使用协议
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>

                    <div>
                        <WingBlank size="lg"/>
                        <Button className="btn" type="primary"
                                disabled={!this.state.enableSubmit}
                                onClick={(e)=>{}}
                        >提交</Button>
                    </div>


                </div>

            </Modal>
        )
    }

}

export default Process;