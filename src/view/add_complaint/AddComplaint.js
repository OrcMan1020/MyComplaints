/**
 * Created by saix on 2018/3/14.
 */
import React, { Component } from 'react';
import { List, Card, WhiteSpace, WingBlank, InputItem, TextareaItem, Picker, ImagePicker,
     Checkbox, Flex, Button, Toast } from 'antd-mobile';
import SuccessModel from './SuccessModel';

import './AddComplaint.css';

import fetch from 'unfetch';
// import { createForm } from 'rc-form';

import {UploadFile, SubmitComplaint} from '../../utils/APIs'


const Item = List.Item;
const Brief = Item.Brief;
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const data = [];
const secretData = [];

class AddComplaint extends Component {


    constructor(prop){
        super(prop);
        this.state = {
            files: data,
            secretFiles : secretData,
            enableSubmit: false,
            visible: false
        };
    }

    onFinish = () => {
        this.setState({
            visible: false,
            files : [],
            secretFiles : [],
            enableSubmit : false
        });
        this.props.goToTab('home');
    }

    onChangeFiles = (filesName)=>{
        return (files, type, index) => {
            this.setState({
                [filesName] : files
            })
        }
    }

    uploadFiles() {
        console.log(this.state.files);

        let promises = [];
        for(let key in this.state.files){
            promises.push(
                UploadFile(this.state.files[key].file)
            );
        }

        for(let key in this.state.secretFiles){
            promises.push(
                UploadFile(this.state.secretFiles[key].file, "private")
            );
        }
        Promise.all(promises)
            .then((results)=>{
                return SubmitComplaint({
                    openId : '111', //TODO
                    objectName : this.getObjectName(),
                    dateTime: new Date(), //TODO
                    complainIssue : "nothing", //TODO
                    detailContent : this.getDetailContent(),
                    mobile : this.getMobile(),
                    evidences : results,

                });

            }).catch(e=>{
                Toast.fail("提交投诉失败!")

            wx.onMenuShareAppMessage({
                title: '互联网之子',
                desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
                link: 'http://movie.douban.com/subject/25785114/',
                imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
                trigger: function (res) {
                    alert('用户点击发送给朋友');
                },
                success: function (res) {
                    alert('已分享');
                },
                cancel: function (res) {
                    alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });

        })
    }



    render() {
        const { files, secretFiles } = this.state;
        // const { getFieldProps } = this.props.form;


        return (

            <div>
                <SuccessModel
                    visible={this.state.visible}
                    onFinish={this.onFinish}
                />
                <div class='complaint'>
                    <WhiteSpace size="lg"/>

                    <List className="my-list">
                        <InputItem
                            placeholder= '(必填) 填写投诉对象'
                            ref="objectName"
                        >投诉对象</InputItem>

                        <Picker title="投诉问题">
                            <List.Item arrow="horizontal">
                                投诉问题<span style={{paddingLeft:'30px', color:'#bbb'}}>(必填) 选择投诉问题的核心</span>
                            </List.Item>
                        </Picker>

                        <InputItem
                            placeholder= '(必填) 填写投诉要求, 35字以内'
                            ref="request"
                            maxLength={35}
                        >投诉诉求</InputItem>
                        <TextareaItem
                            title="投诉详情"
                            placeholder="(必填) 请完整描述投诉事件"
                            rows="5"
                            ref="detailContent"
                        />
                        <InputItem
                            placeholder= '(必填) 填写个人手机号'
                            type="phone"
                            ref="mobile"

                        >联系电话</InputItem>
                    </List>

                    <WhiteSpace size="lg"/>

                    <List className="my-list">

                        <InputItem
                            placeholder= '例如银行账号, 快递单号'
                            type = 'password'
                            ref="private"
                        >隐藏内容</InputItem>


                        <Item>
                            <div>
                                添加附件
                                <span style={{paddingLeft:'30px', color:'#bbb'}}>支持jpg,png,gif格式, 最多上传10张</span>

                            </div>

                            <ImagePicker
                                files={files}
                                onChange={this.onChangeFiles('files')}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files.length <= 10}
                            />


                        </Item>
                        <Item>
                            <div>
                                隐私附件
                                <span style={{paddingLeft:'30px', color:'#bbb'}}>不公开给第三方, 最多上传10张</span>

                            </div>

                            <ImagePicker
                                files={secretFiles}
                                onChange={this.onChangeFiles('secretFiles')}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={secretFiles.length <= 10}
                            />


                        </Item>

                    </List>

                    <WhiteSpace size="md"/>

                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId"
                                       checked={this.state.enableSubmit}
									   onChange={e=>this.setState({
                                               enableSubmit : !this.state.enableSubmit
                                           }

                                       )}>
                                同意微投诉使用协议
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>

                    <div>
                        <WingBlank size="lg"/>
                        <Button className="btn" type="primary"
                                disabled={!this.state.enableSubmit}
                                onClick={e=>{
                                    this.uploadFiles();
                                    //this.dump()
                                    }}
                                >提交</Button>
                    </div>
                </div>
            </div>


        )


    }


    dump() {
        console.log(this.getDetailContent())
    }

    /*
     get input view value

     */
    getObjectName() {
        return this.refs.objectName.state.value;
    }

    getRequest() {
        return this.refs.request.state.value;
    }

    getMobile() {
        return this.refs.mobile.state.value;
    }

    getPrivate() {
        return this.refs.private.state.value;
    }

    getDetailContent() {
       return this.refs.detailContent.state.value;
    }

    ////////////////////////////////////////////////////


}
// const AddComplaintWrapper = createForm()(AddComplaint);

export default AddComplaint;