/**
 * Created by saix on 2018/3/14.
 */
import React, { Component } from 'react';
import { List, Card, WhiteSpace, WingBlank, InputItem, TextareaItem, Picker, ImagePicker,
     Checkbox, Flex, Button } from 'antd-mobile';
import SuccessModel from './SuccessModel';

import './AddComplaint.css';

const Item = List.Item;
const Brief = Item.Brief;
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const data = [];

class AddComplaint extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            files: data,
            agreed: true,
            visible: false
        };
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    };


    render() {
        const { files } = this.state;

        return (

            <div>
                <SuccessModel visible={this.state.visible}/>
                <div class='complaint'>
                    <WhiteSpace size="lg"/>

                    <List className="my-list">
                        <InputItem
                            placeholder= '(必填) 填写投诉对象'
                        >投诉对象</InputItem>

                        <Picker title="投诉问题">
                            <List.Item arrow="horizontal">投诉问题<span style={{paddingLeft:'30px', color:'#bbb'}}>(必填) 选择投诉问题的核心</span></List.Item>
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
                                onChange={this.onChange}
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
                                files={files}
                                onChange={this.onChange}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files.length <= 10}
                            />


                        </Item>

                    </List>

                    <WhiteSpace size="md"/>

                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId"
                                       checked={this.state.enableSubmit}
                                       onChange={e => {this.state.enableSubmit=!this.state.enableSubmit; this.setState(

                                       )}}>
                                同意微投诉使用协议
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>

                    <div>
                        <WingBlank size="lg"/>
                        <Button className="btn" type="primary"
                                disabled={!this.state.enableSubmit}
                                onClick={e=>{
                                    this.state.visible = true;
                                    this.setState()}}
                                >提交</Button>
                    </div>
                </div>
            </div>


        )


    }


}

export default AddComplaint;