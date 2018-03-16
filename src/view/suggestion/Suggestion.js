import React, { Component } from 'react';
import {NavBar, Icon, WhiteSpace, TextareaItem, InputItem, WingBlank, Button} from 'antd-mobile';
import MyNavBar from "../../component/MyNavBar/MyNavBar";
import './Suggestion.css';

class Suggestion extends Component {
    goBack = () => {
        this.context.router.history.goBack();
    };

    render() {
        return (
            <div class='suggestion'>
                <MyNavBar
                title={'意见反馈'}/>

                <WhiteSpace size={'lg'}/>
                <div className={'suggestion-title'}>
                    用户体验微信号: 123456
                </div>
                <WhiteSpace size={'lg'}/>

                <TextareaItem
                    rows={7}
                    autoHeight
                    placeholder="请输入您的问题和建议(700字以内)"
                />
                <WhiteSpace size={'lg'}/>

                <InputItem
                    placeholder="方便我们及时与你沟通"
                    clear
                    moneyKeyboardAlign="left"
                ><span style={{color:'#202020'}}>联系电话:</span></InputItem>
                <WhiteSpace size={'lg'}/>
                <WingBlank size={'lg'}>
                    <Button type="primary">提交反馈</Button><WhiteSpace />
                </WingBlank>
            </div>
        );
    }
}

export default Suggestion;