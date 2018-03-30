/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import { Card, WhiteSpace, Flex, Button, Modal, List, TextareaItem, ImagePicker,
    Checkbox, WingBlank, Toast, Grid} from 'antd-mobile';
import moment from "moment";
import {Timeline, TimelineEvent} from 'react-event-timeline'
import ReactStars from 'react-stars';
import {Loading} from '../Loading';
import {GetComplainFeedBacks, IMAGE_URL, UploadFiles, SubmitComplainFeedBack} from '../../utils/APIs';

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
        this.complaint = this.props.complaint || {};

        this.state = {
            addInfoModel: false,
            files : [],
            enableSubmit: false,
            feedBacks : null
        }




    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        GetComplainFeedBacks(this.complaint.complainNo)
            .then(res=>{
                let res2 = res.sort((el1, el2)=> {
                    //return el1.dateTime.localeCompare(el2)>0;
                    return moment(el1.dateTime).unix()>moment(el2.dateTime).unix()
                })
                res2.forEach(el=>{
                    el.feedBackContent = el.feedBackContent || "无内容"
                })
                this.setState({
                    feedBacks : res2,
                    addInfoModel: false,
                    files : [],
                    enableSubmit: false,


                })
            })
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


    renderTimeLineItem(display, src, feedback, isLast){
        if(!display) {
            return null;
        }
        else {
            return (
                <TimelineEvent
                    title={""}
                    icon={<img style={{borderRadius:'50%',width:'32px',height:'32px'}}
                             src={src}/>}
                    bubbleStyle={{borderColor:'#f5f5f9'}}

                >
                    {this.renderFeedback(feedback, isLast)}
                </TimelineEvent>
            )
        }
    }



    renderCommonContent(feedback) {
        let evidences = feedback.evidences || "";

        let icons = [];
        if (evidences.length>0){
            const evidencesx = evidences.split(",");
            icons = evidencesx.map(el=>{
                return {icon : IMAGE_URL(el)}
            });
        }
        return (
            <div>
                <TimeLineHeader
                    name={feedback.objectName}
                    action={feedback.status}
                    date={feedback.dateTime}
                />
                <div style={{fontSize:'14px', color:'#878787'}}>
                    {feedback.feedBackContent}
                </div>
                {
                    icons.length==0? null : (
                        <div>
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
                        </div>
                    )
                }


            </div>
        )
    }

    renderSubmitComplaint(feedback) {
        return (
            <div>
                {this.renderCommonContent(feedback)}
            </div>

        );
    }

    renderSubmitComplaint2(){
        let feedback = {
            objectName : this.complaint.nickName,
            status : "发起投诉",
            dateTime: this.complaint.dateTime,
            feedBackContent : `${this.complaint.nickName} 发起投诉`
        }

        return this.renderCommonContent(feedback);
    }

    renderAddInformation(feedback, isLast) {
        let _renderButton = ()=>{
            if (isLast){
                return (
                    <div>
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
            else {
                return null;
            }
        }
        return(
            <div>
                {this.renderCommonContent(feedback)}
                {
                    _renderButton()
                }

            </div>
        )
    }

    renderExaminationPassed(feedback, isLast){
        return (
            <div>
                {this.renderCommonContent(feedback)}
            </div>
        )
    }

    renderSellerProcessing(feedback, isLast){
        return (
            <div>
                {this.renderCommonContent(feedback)}
            </div>
        )
    }

    renderSellerReply(feedback, isLast){
        let _renderButton = ()=>{
            if (isLast){
                return (
                    <div>
                        <WhiteSpace size="lg"/>
                        <Button type="primary"
                                inline
                                style={{ marginRight: '4px'}}
                                size="small"
                                onClick={(e)=>{
                                    this.context.router.history.push(
                                        {
                                            pathname:"/evaluate",
                                            search: 'complaintNo=' + this.complaint.complainNo + "&nickName=" + this.complaint.nickName
                                        }
                                    )
                                }}
                        >评价处理结果</Button>
                        <Button type="primary"
                                inline
                                style={{ marginRight: '4px'}}
                                size="small"
                                onClick={this.showModal('addInfoModel')
                                }>
                            继续投诉</Button>
                    </div>
                )
            }
            else {
                return null;
            }
        }

        return (
            <div>
                {this.renderCommonContent(feedback)}
                {
                    _renderButton()
                }
            </div>
        )
    }

    renderAdditionalComplaint(feedback, isLast){
        return (
            <div>
                {this.renderCommonContent(feedback)}
            </div>
        )
    }

    renderFinished(feedback){
        let feedBackScore = feedback.feedBackScore || "{}";
        feedBackScore = JSON.parse(feedBackScore);
        let _renderFeedbackScore = () => {
            if (feedback.feedBackScore){
                return (
                    <div>
                        <WhiteSpace/>
                        <Flex>
                            <div style={{flex:'1'}}>服务态度:</div>
                            <div style={{flex:'3'}}>
                                <ReactStars count={5}
                                            value={feedBackScore.service}
                                            color2={'#ff8f33'}
                                            edit={false}/>
                            </div>
                        </Flex>
                        <Flex>
                            <div style={{flex:'1'}}>处理态度:</div>
                            <div style={{flex:'3'}}>
                                <ReactStars count={5}
                                            value={feedBackScore.speed}
                                            color2={'#ff8f33'}
                                            edit={false}/>
                            </div>
                        </Flex>
                        <Flex>
                            <div style={{flex:'1'}}>满意度:</div>
                            <div style={{flex:'3'}}>
                                <ReactStars count={5}
                                            value={feedBackScore.satis}
                                            color2={'#ff8f33'}
                                            edit={false}/>
                            </div>
                        </Flex>
                    </div>
                )
            }
            else {
                return null;
            }
        }

        return (
            <div>
                {this.renderCommonContent(feedback)}
                {
                    _renderFeedbackScore()
                }

            </div>
        )
    }



    renderFeedback(feedback, isLast) {
        switch(feedback.status) {
            case '发起投诉':
                return this.renderSubmitComplaint(feedback)
                break;
            case '补充资料':
                return this.renderAddInformation(feedback, isLast)
                break;
            case '审核通过':
                return this.renderExaminationPassed(feedback)
                break;
            case '商家处理中':
                return this.renderSellerProcessing(feedback, isLast)
                break;
            case  '商家回复':
                return this.renderSellerReply(feedback, isLast)
                break;
            case '补充投诉':
                return this.renderAdditionalComplaint(feedback, isLast)
                break;
            case '确认完成并评价':
                return this.renderFinished(feedback)
                break;
            default:
                return this.renderCommonContent(feedback)

        }
    }

    render() {


        if(!this.state.feedBacks){
            return (
                <Loading/>
            )
        }
        if(this.state.feedBacks.length==0) {
            return null;
        }

        if(this.state.feedBacks[0].status !== '发起投诉'){
            this.state.feedBacks = [{
                objectName : this.complaint.nickName,
                status : "发起投诉",
                dateTime: this.complaint.dateTime,
                feedBackContent : `${this.complaint.nickName} 发起投诉`,
                objectIcon : this.complaint.avatarUrl
            }, ...this.state.feedBacks];
        }
        let lastIndex = this.state.feedBacks.length-1;

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

                        {
                            this.state.feedBacks.map((el, index)=>{
                                return this.renderTimeLineItem(true, IMAGE_URL(el.objectIcon), el, index===lastIndex);
                            })
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
                            ref="additionalInfo"
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
                                onClick={this.uploadAdditionalComplaint.bind(this)}
                        >提交</Button>
                    </div>


                </div>

            </Modal>
        )
    }

    uploadAdditionalComplaint() {
        let additionalInfo = this.refs.additionalInfo.state.value;
        let complaintNo = this.complaint.complainNo;
        let nickName = this.complaint.nickName;
        console.log(additionalInfo);
        console.log(this.state.files);

        let fileInfo = this.state.files.map(file=>{
            return {
                file : file,
                type : null
            }
        })

        Toast.loading('正在提交, 请稍等...', 30, null, true);

        UploadFiles(fileInfo)
            .then(results => {
                let fileNames = results || []
                return SubmitComplainFeedBack({
                    complainNo : complaintNo,
                    objectName : nickName,
                    status : "补充投诉",
                    evidences : fileNames.join(","),
                    feedBackContent: additionalInfo,

                })
            })


            .then(res=>{
                Toast.success("提交补充投诉成功!", 2, ()=>{
                    //this.goBack();
                    //this.context.router.
                    this.refresh();
                })
            })
            .catch(e=>{
                Toast.fail("提交补充投诉失败!"+e, 2);
            })

    }

}

export default Process;