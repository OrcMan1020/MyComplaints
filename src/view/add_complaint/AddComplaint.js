/**
 * Created by saix on 2018/3/14.
 */
import React, { Component } from 'react';
import { List, Card, WhiteSpace, WingBlank, InputItem, TextareaItem, Picker, ImagePicker,
     Checkbox, Flex, Button } from 'antd-mobile';
import SuccessModel from './SuccessModel';

import './AddComplaint.css';

import fetch from 'unfetch';


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

            let formData = new FormData();
            formData.append("file", this.state.files[key].file);
            promises.push(
                fetch("http://localhost:8082" + "/upload" , {
                    method: 'POST',
                    headers: {
                    },
                    body: formData
                })

            );
        }

        Promise
            .all(promises)
            .then((responses)=>{
                this.setState({
                    visible : true
                })
            })
            .catch((err)=>{
                alert("upload failed!")
            })
    }



    render() {
        const { files, secretFiles } = this.state;

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
                        >投诉对象</InputItem>

                        <Picker title="投诉问题">
                            <List.Item arrow="horizontal">
                                投诉问题<span style={{paddingLeft:'30px', color:'#bbb'}}>(必填) 选择投诉问题的核心</span>
                            </List.Item>
                        </Picker>

                        <InputItem
                            placeholder= '(必填) 填写投诉要求, 35字以内'
                        >投诉诉求</InputItem>
                        <TextareaItem
                            title="投诉详情"
                            placeholder="(必填) 请完整描述投诉事件"
                            rows="5"
                        />
                        <InputItem
                            placeholder= '(必填) 填写个人手机号'
                        >联系电话</InputItem>
                    </List>

                    <WhiteSpace size="lg"/>

                    <List className="my-list">

                        <InputItem
                            placeholder= '例如银行账号, 快递单号'
                            type = 'password'
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
                                    }}
                                >提交</Button>
                    </div>
                </div>
            </div>


        )


    }


}

export default AddComplaint;